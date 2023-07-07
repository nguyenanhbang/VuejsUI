<template>
    <header>
        <div class="contact">
            <div class="ctl">
                <img alt="header left contact" src="../../imgs/contactHeader.png"/>
            </div>
            <div class="cth">
                <p class="txt1">Blog</p>
                <p class="txt2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="ctr">
                <img alt="ctr" src="../../imgs/ctr.png"/>
            </div>
        </div>
    </header>
</template>

<style scoped>
.contact {
    background-image: url('../../imgs/bgrconstact.png');
    display: flex;
}
.ctl{
    width: 15%;
}
.ctl img {
    width: 60%;
    height: 85%;
}
.cth {
    width: 55%;
    margin: 30px 60px 30px 0px;
}
.txt1 {
    font-size: 70px;
    padding: 20px 40px 20px 40px;
    background: #ffffff;
    font-weight: bold;
    color: #000000;
    width: 220px;
    text-align: center;
    font-family: "Stardos Stencil";
    margin-bottom: 20px;
    
}
.txt2 {
    font-size: 22px;
    color: #000000;
}
.ctr {
    width: 30%;
    text-align: right;
   
}
.ctr img {
    margin-right: 7px;
    width: 65%;
    height: 65%;
}
</style>

<Script>

</Script>