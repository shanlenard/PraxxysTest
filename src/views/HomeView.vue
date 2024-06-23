<template>
    <MenuDrawer />
    <ion-page id="main-content">
         <MenuToolBar />
        <ion-content class="ion-padding">
            <h1>Content Here</h1>
        </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage } from '@ionic/vue';
  import MenuDrawer from '../components/MenuDrawer.vue';
  import MenuToolBar from '../components/MenuToolBar.vue';

  </script>

<style scoped>
.card-center{
    width:90%;
    display:block;
    margin: 0 auto;
    margin-top: 10px;
}
.content.center{
    width:90%;
    display:block;
    margin: 0 auto;
    margin-top: 10px;
}
</style>
  