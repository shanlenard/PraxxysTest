<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
        <ion-title>
            <strong>{{ name }}</strong>
        </ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
defineProps({
  name: String,
});
</script>