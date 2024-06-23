<template>
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
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
</script>