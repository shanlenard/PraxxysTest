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
            <ion-list lines="none">
                <ion-item href="">Home</ion-item>
                <ion-item href="/order" routerDirection="forward">Order Now</ion-item>
                <ion-item>
                    <ion-label>Notifications</ion-label>
                    <ion-badge color="success">8</ion-badge>
                </ion-item>

                <ion-item>
                    <ion-label>My Orders</ion-label>
                    <ion-badge color="success">8</ion-badge>
                </ion-item>
                
            </ion-list>
        </ion-header>
        <ion-footer>
            <ion-toolbar >
                <ion-item lines="none">
                    <ion-button class="ion-text-wrap" color="danger" style="max-width: 400px">
                        Logout
                    </ion-button>
                </ion-item>
            </ion-toolbar>
        </ion-footer>
    </ion-menu>
</template>

<script setup>
import {  IonHeader, IonToolbar } from '@ionic/vue';

defineProps({
  name: String,
});
</script>