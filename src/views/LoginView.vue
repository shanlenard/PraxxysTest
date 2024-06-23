<template>
    <div class="center-screen">
        <ion-grid>
            <ion-row>
                <ion-col size="12">
                    <ion-label class="text-center">
                            <h1>Login</h1>
                        </ion-label>
                    <ion-card>
                        <ion-input
                        ref="input"
                        type="email"
                        fill="solid"
                        label="Email"
                        label-placement="floating"
                        error-text="Invalid email"
                        @ionInput="validate"
                        @ionBlur="markTouched"
                        ></ion-input>
                        <ion-input
                            ref="input"
                            type="password"
                            fill="solid"
                            label="Password"
                            label-placement="floating"
                            error-text="Invalid email"
                            @ionInput="validate"
                            @ionBlur="markTouched"
                        ></ion-input>
                        <ion-button class="button-size" href="/">Login</ion-button>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
        
    </div>

</template>

<script setup>
    import { IonInput } from '@ionic/vue';
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 50%;
}
.text-center {
    text-align: center;
}
.button-size {
    width: 100%;    
    background-color: #008CBA;
}
</style>