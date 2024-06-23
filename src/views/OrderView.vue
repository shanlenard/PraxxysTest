<template>

    <MenuDrawer />
    <ion-page id="main-content">
        <MenuToolBar name="Our Food" />
        <ion-content class="ion-padding">
            <ion-searchbar placeholder="try our new beef Bibimbowl"></ion-searchbar>
            <ion-button color="success">All</ion-button>
            <ion-button color="light">Breakfast</ion-button>
            <ion-button color="light">Chicken</ion-button>
            <ion-button color="light">Seafood</ion-button>
            <ion-button color="light">Beef</ion-button>
            <ion-button color="light">Pork</ion-button>
            <ion-grid>
                <ion-row>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/1">
                            <img alt="Silhouette of mountains" class="card-center" src="https://media.istockphoto.com/id/1491355712/photo/healthy-chicken-salad-bowl.jpg?s=1024x1024&w=is&k=20&c=UDJNwc_Hngp1hPdufarJHv-sX3Kw_MkRuEN77l8DQKM=" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>Price 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/2">
                            <img alt="Silhouette of mountains" class="card-center" src="https://cdn.pixabay.com/photo/2023/07/20/16/11/bibimbap-8139739_960_720.jpg" />
                            <ion-card-header>
                            <ion-card-title>Bibimbap</ion-card-title>
                            <ion-card-subtitle>Beef</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>Price 175</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/3">
                            <img alt="Silhouette of mountains" class="card-center" src="https://cdn.pixabay.com/photo/2023/05/20/09/49/ai-generated-8006213_960_720.jpg" />
                            <ion-card-header>
                            <ion-card-title>Beef Steak</ion-card-title>
                            <ion-card-subtitle>Beef</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>Price 130</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/4">
                            <img alt="Silhouette of mountains" class="card-center" src="https://media.istockphoto.com/id/2012836832/photo/rice-noodles-and-chicken-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=DBSGfsqZdE1gsuSyKUhWqu_pStQa2CcOHoPVFCKKlmU=" />
                            <ion-card-header>
                            <ion-card-title>Ramen</ion-card-title>
                            <ion-card-subtitle>Seafood</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>Price 180</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/5">
                            <img alt="Silhouette of mountains" class="card-center" src="https://cdn.pixabay.com/photo/2024/04/26/12/24/ai-generated-8721771_960_720.jpg" />
                            <ion-card-header>
                            <ion-card-title>Pork Steak</ion-card-title>
                            <ion-card-subtitle>Pork</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>Price 155</ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="6">
                        <ion-card class="card-center" href="/orderdetails/6">
                            <img alt="Silhouette of mountains" class="card-center" src="https://media.istockphoto.com/id/642065070/photo/beef-and-broccoli-stir-fry.jpg?s=1024x1024&w=is&k=20&c=tOPYx6-XitDRTHoJUxB3tSCjB6haaVXliA9NY42WByg=" />
                            <ion-card-header>
                            <ion-card-title>Beef Broccoli</ion-card-title>
                            <ion-card-subtitle>Beef</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-label>Price 160</ion-label>
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