<template>
    <page>
        <ActionBar title="Promotions">
    </ActionBar>
       <GridLayout class="mainGrid" rows=auto,auto,auto,auto columns=*>
           <GridLayout 
                    row=0
                    columns=auto
                    rows=auto,auto>
               <TextField row=0 class="promoTextField" text="enter promo code" />
               <Button row=1 class="promoButton"  text="Apply Code" @tap="codeApply"/>
           </GridLayout>

            <GridLayout 
                    row=1
                    columns=*
                    rows=auto,auto,auto,auto,auto>
               <Label row=0  class="claimedLabel" text="Claimed"  />
                <Button row=1  class="claimedButton" text="$20 off"/>
                <Button row=2  class="claimedButton" text="free delivery"/>
                <Button row=3  class="claimedButton" text="$10 off"/>
                <Button row=4  class="claimedButton" text="free delivery"/>
           </GridLayout> 
           
             <GridLayout 
                    class="savingsGrid"
                    row=3
                    columns=auto,auto
                    rows=auto>
               <Button row=0 col=0  class="savingsButton" text="Total Savings"/>
                <Button row=0 col=1  class="totalButton" text="$60"/>
           </GridLayout>  

            
       </GridLayout>




    </page>
</template>


export default
{
    data()
    {
        return
        {
            code:""
        };

    },
    methods:
    {
       
    }
}

</script>











<style scoped>

ActionBar 
{
  background-color: #bd2122;
  color: #ffffff;
}

.promoTextField
{
    font-size: 18;
    margin-top: 20;
    margin-left: 10;

}
  .promoButton
  {
      background-color: #bd2122;
      font-size: 18; 
      margin-left: 5;    
  }
.claimedButton
{
    text-align: left;
}
  .claimedLabel
  {
      font-size: 18;
    margin-top: 30;
    margin-left: 10;
  }
  .savingsGrid
  {
      margin-top: 30;
  }
.mainGrid
{
    margin-left: 15;
    margin-right: 15;
}
</style>