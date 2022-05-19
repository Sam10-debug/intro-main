const feature=document.querySelector("#feature")
const company=document.querySelector("#company")
const dropdown1=document.querySelector(".dropdown-1")
const dropdown2=document.querySelector(".dropdown-2")
const up1=document.querySelector("#up11")
const up2=document.querySelector("#up22")
const down1=document.querySelector("#down11")
const down2=document.querySelector("#down22")
const upp1=document.querySelector("#up1")
const upp2=document.querySelector("#up2")
const downn1=document.querySelector("#down1")
const downn2=document.querySelector("#down2")
const second=document.querySelector("#second")
const fourth=document.querySelector("#fourth")
const hamburger=document.querySelector("#hamburger-mobile")
const close=document.querySelector("#icon-close")
const secondDropDown=document.querySelector("#secondDropdown")
const features=document.querySelector("#features")
const companies=document.querySelector("#companies")
const func=()=>{
    dropdown1.classList.toggle("active")
    dropdown1.classList.remove("inactive")
    dropdown2.classList.add("inactive")
    upp1.classList.toggle("show")
    downn1.classList.toggle("unshow")
}
const funct=()=>{
    dropdown2.classList.toggle("active")
    dropdown2.classList.remove("inactive")
    dropdown1.classList.add("inactive")
    upp2.classList.toggle("show")
    downn2.classList.toggle("unshow")
}
const inst=_=>{
    secondDropDown.classList.toggle("okay")
     hamburger.classList.add("okayy")
     close.classList.add("okayyy")
}
const instr=_=>{
    secondDropDown.classList.remove("okay")
    hamburger.classList.remove("okayy")
    close.classList.remove("okayyy")
}
const featureFunc=_=>{  
    second.classList.toggle("seconded")
    up1.classList.toggle("rema")
    down1.classList.toggle("posty")
}
const companyFunc=_=>{  
    fourth.classList.toggle("four")
    up2.classList.toggle("bnxn")
    down2.classList.toggle("drake")
}
feature.addEventListener("click",func)
company.addEventListener("click",funct)
hamburger.addEventListener("click",inst)
close.addEventListener("click",instr)
features.addEventListener("click",featureFunc)
companies.addEventListener("click",companyFunc)


