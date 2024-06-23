<template>

    <MenuDrawer />
    <ion-page id="main-content">
        <MenuToolBar />
        <ion-content class="ion-padding">
            <ion-searchbar placeholder="try our new beef Bibimbowl"></ion-searchbar>
            <h1 class="card-center">Shan Lenard</h1>
            <ion-grid>
                <ion-row>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/1">
                            <img alt="Silhouette of mountains" class="card-center" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>P 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/2">
                            <img alt="Silhouette of mountains" class="card-center" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>P 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/3">
                            <img alt="Silhouette of mountains" class="card-center" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>P 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/4">
                            <img alt="Silhouette of mountains" class="card-center" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>P 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/5">
                            <img alt="Silhouette of mountains" class="card-center" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>P 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/6">
                            <img alt="Silhouette of mountains" class="card-center" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>P 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
        </ion-grid>
        </ion-content>
    </ion-page>

    
</template>

<script setup>
  import { IonPage } from '@ionic/vue';
  import MenuToolBar from '../components/MenuToolBar.vue';
  import MenuDrawer from '../components/MenuDrawer.vue';

  
  </script>

<style scoped>
.card-center{
    width:90%;
    display:block;
    margin: 0 auto;
    margin-top: 10px;
}
</style>