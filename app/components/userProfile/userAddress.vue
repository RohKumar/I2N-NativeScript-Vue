<template>
  <Page>

    <ActionBar title="My Addresses">
    </ActionBar>

    <GridLayout class="mainGrid" rows=*,auto>
        <GridLayout class="tabView"
        row=0
        columns="*"
        rows=auto,auto,auto,auto>
          <GridLayout class="firstGrid"
          backgroundColor="#ffffff"
          width=100%
          row=0
          columns=*,auto,auto
          rows=auto,auto,auto>
          
          <Label row=0 col=0 class="name" text="chandan"/>
          <Label row=1 col=0 class="phone" text="+12r13"/>
          <Label row=2 col=0 class="address" text="817 Venice Blvd, Los Angeles, CA 90015, USA"/>
          <Image 
            row=1
            col=1
            horizontalAlignment="right"
            stretch="aspectFill"
            class="edit-img" 
            src="~/assets/images/edit-icon.png"/>
            <Image 
            row=1
            col=2
            horizontalAlignment="right"
            stretch="aspectFill"
            class="edit-img"
            src="~/assets/images/right-arrow.png"/>
          
          </GridLayout>
          
        </GridLayout>
        <Label  @tap= "onNewAddress" row=1 class="prompt"  horizontalAlignment="stretch" text="ADD NEW ADDRESS"/>
    </GridLayout>
    
  </Page>
</template>



<style scoped>

ActionBar {
background-color: #bd2122;
color: #ffffff;
}

.prompt{
  
background-color: #bd2122;
color: #ffffff;
text-align: center;
height: 50;
padding-top: 15;


}

.edit-img{
  margin-top: 4;
  width: 20;
  height: 20;
  margin-right: 10;
}
.name{
  color:black;
}
.firstGrid{ 
    margin-top: 10;
    height: 60;
    margin-left:25;
    margin-right: 15;
    background-color: red;
   
}

</style>