<template>
  <div class="d-flex justify-center flex-column top w-100">
    <base-dialog
      :show="isError"
      title="Cant Fetch Any Data"
      @close="handleError"
      >Please Check Your Input Address Corectly</base-dialog
    >
    <base-dialog
      :show="isLoading && !error"
      fixed
      title="Search IP Address ..."
    >
      <base-spinner></base-spinner>
    </base-dialog>
    <h1 class="text-white font-weight-bold mt-7 text-center">
      IP Address Tracker
    </h1>
    <div class="box">
      <v-text-field
        variant="solo"
        placeholder="Search IP Address [Enter]"
        color="black"
        id="input"
        class="mx-auto my-5 position-relative search"
        v-model="IP"
        @keyup.enter="show(IP)"
      >
      </v-text-field>
      <v-card
        class="w-75 mx-auto position-relative rounded-xl d-lg-flex d-sm-block justify-space-evenly text-sm-center box-info"
      >
        <div
          class="ip font-weight-bold text-grey-darken-2 w-lg-100 pa-lg-7 pa-sm-2 info mx-sm-auto"
        >
          IP ADDRESS
          <p>{{ IP }}</p>
        </div>
        <div class="garis"></div>
        <div
          class="location font-weight-bold text-grey-darken-2 w-100 pa-lg-7 pa-sm-2 info"
        >
          LOCATION
          <p>{{ location }}</p>
        </div>
        <div class="garis"></div>
        <div
          class="timezone font-weight-bold text-grey-darken-2 w-100 pa-lg-7 pa-sm-2 info"
        >
          TIMEZONE
          <p>{{ timezone }}</p>
        </div>
        <div class="garis"></div>
        <div
          class="isp font-weight-bold text-grey-darken-2 w-100 pa-lg-7 pa-sm-2 info"
        >
          ISP
          <p>{{ isp }}</p>
        </div>
      </v-card>
    </div>
    <div id="map">
      <l-map ref="map" v-model:zoom="zoom" :center="markerLatLng">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer
        ><l-marker :lat-lng="markerLatLng"></l-marker>
      </l-map>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';

const isLoading = ref(false);
const title = ref('Search IP Address ...');
const isError = ref(false);

const zoom = ref(10);
const markerLatLng = ref([34.04915, -118.09462]);
const IP = ref('192.212.174.101');

const location = ref('Isekai');
const timezone = ref('00-00');
const isp = ref('telnet');

async function show(ip) {
  isLoading.value = true;
  ip = IP.value;

  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.VUE_APP_APIKEY}&ipAddress=${ip}`
  );

  const responseData = await response.json();

  if (!response.ok) {
    const error = new Error(
      responseData.message || 'Error Cant Fetch Any data'
    );
    isError.value = true;

    isLoading.value = false;

    console.log(responseData.message, error);
    title.value = responseData.message;
  }
  console.log(responseData);
  console.log('IP : ' + responseData.ip);
  console.log(
    'Lokasi : ' +
      responseData.location.country +
      ', ' +
      responseData.location.region +
      ', ' +
      responseData.location.city
  );
  location.value =
    responseData.location.country +
    ',' +
    responseData.location.region +
    ',' +
    responseData.location.city;
  timezone.value = 'UTC' + responseData.location.timezone;
  isp.value = responseData.isp;
  console.log('Waktu : UTC ' + responseData.location.timezone);
  console.log('ISP : ' + responseData.isp);
  markerLatLng.value = [responseData.location.lat, responseData.location.lng];
  isLoading.value = false;
}

function handleError() {
  isError.value = null;
}
</script>

<style scoped>
h1.font-weight-bold {
  font-size: 1.6rem;
}

.garis {
  border-left: 1px hsla(0, 100%, 0%, 0.3) solid;
  height: 3rem;
  margin-top: 3rem;
  width: 0px;
}

.top {
  background-image: url(../assets/images/pattern-bg-desktop.png);
  background-size: 100% 15rem;
  position: fixed;
}

.ip,
.location,
.timezone,
.isp {
  font-size: 0.8rem;
}

div p {
  font-weight: bolder;
  font-size: 1.5rem;
  color: black;
  font-family: inherit;
}

#map {
  position: absolute;
  z-index: -100000;
  top: 240px;
  width: 100%;
  height: 80vh;
}

.search {
  width: 30vw;
}

@media (min-width: 320px) and (max-width: 960px) {
  .garis {
    display: none;
  }

  .box-info {
    text-align: center;
  }

  .info {
    padding: 0.2rem;
    font-weight: 400;
    font-size: small;
  }

  .info p {
    font-weight: bold;
    font-size: medium;
  }

  .search {
    width: 20rem;
  }
}
</style>
