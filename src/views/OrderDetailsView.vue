<template>
    <MenuDrawer />
    <ion-page id="main-content">
        <MenuToolBar name="Add to bag" />
        <ion-content class="ion-padding">
            <h1 class="card-center">Details</h1>
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-card class="card-center">
                            <img alt="Silhouette of mountains" class="card-center" src="https://media.istockphoto.com/id/1491355712/photo/healthy-chicken-salad-bowl.jpg?s=1024x1024&w=is&k=20&c=UDJNwc_Hngp1hPdufarJHv-sX3Kw_MkRuEN77l8DQKM=" />
                            <ion-card-header>
                            <ion-card-title>Chicken Salad</ion-card-title>
                            <ion-card-subtitle>Chicken</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content class="card-content">
                                <ion-label>Price 175</ion-label>
                                <ion-label class="label-center">
                                    <ion-button @click="increaseCounter(1)" size="small">+</ion-button>
                                    <ion-label>{{ counterData.count }}</ion-label>
                                    <ion-button @click="decreaseCounter(1)" size="small">-</ion-button>
                                </ion-label>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
        </ion-grid>
        </ion-content>
        <ion-footer class="label-center">
            <ion-button @click="alertView()" class="button-bag" size="small">Add to bag</ion-button>
        </ion-footer>
    </ion-page>

</template>

<script setup>
import { reactive } from 'vue'
import { IonPage } from '@ionic/vue';
import MenuToolBar from '../components/MenuToolBar.vue';
import MenuDrawer from '../components/MenuDrawer.vue';


//Reactive data
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

//function
const increaseCounter = amount => {
  counterData.count += amount
}

//function
const decreaseCounter = amount => {
  counterData.count -= amount
}

//alert
const alertView = () => {
  alert(counterData.count)
}
</script>



<style scoped>
.card-center{
    width:90%;
    display:block;
    margin: 0 auto;
    margin-top: 10px;
}
.card-content {
    justify-content: space-between;
    display: flex;
    margin-inline: 10px;
    
}
.label-center {
    text-align: center;
}
.button-bag {
    width: 250px;
    max-width: 100%;
    padding: 15px;
}
</style>