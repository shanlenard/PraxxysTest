<template>
    <ion-menu type="push" content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-item lines="none">
                    <ion-avatar slot="start">
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </ion-avatar>
                    <ion-label>
                        Shan Lenard T.
                    </ion-label>
                </ion-item>
            </ion-toolbar>
            <MenuDrawer />
        </ion-header>
    </ion-menu>

    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
          <ion-title>
            <RouterLink to="/order">Praxxys</RouterLink> 
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Tab 1</ion-title>
          </ion-toolbar>
        </ion-header>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  </script>
  