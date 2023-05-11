import { contentData } from "./Modules/database.js";
// console.log(contentData);

const  container_menu = document.querySelector(".container_menu")
function container_menu_f () {
  const menu = document.createElement("header")
  menu.className = "menu"

  const menu_img = document.createElement("div")
  menu_img.className = "menu_img"

  const img_logo = document.createElement("img")
  img_logo.className = "img_logo"
  img_logo.src = contentData.container_menu.img_logo

  const menu_menu = document.createElement("div")
  menu_menu.className = "menu_menu"

  const head_menu = document.createElement("i")
  head_menu.className = "fa-solid fa-bars head_menu "


  menu_img.append(img_logo)
  menu_menu.append(head_menu)
  menu.append(menu_img,menu_menu)
  container_menu.append(menu)
}


container_menu_f()
// =====container_background 
const container_background = document.querySelector(".container_background");
function container_content() {
    const container_content = document.createElement("div")
    container_content.className = "container_content"

    const tagH1 = document.createElement("h1")
    tagH1.className = "table_of_contents"
    tagH1.innerHTML = contentData.container_background.table_of_contents

   
    const tagImg1 = document.createElement("img")
    tagImg1.className = "cont_content_img_1"
    tagImg1.src = contentData.container_background.cont_content_img_1
    
    const tagImg2 = document.createElement("img")
    tagImg2.className = "cont_content_img_2"
    tagImg2.src = contentData.container_background.cont_content_img_2
     
    const tagP = document.createElement("p")
    tagP.className = "container_content_p"
    tagP.innerHTML = contentData.container_background.container_content_p
    
    const tagImg3 = document.createElement("img")
    tagImg3.className = "cont_content_img_3"
    tagImg3.src = contentData.container_background.cont_content_img_3
    
    const tagImg4 = document.createElement("img")
    tagImg4.className = "cont_content_img_4"
    tagImg4.src = contentData.container_background.cont_content_img_4

    const tagButton = document.createElement("button")
    tagButton.className = "button_container_content"
    tagButton.innerHTML = contentData.container_background.button_container_content

     
    container_content.append(tagH1,tagImg1,tagImg2,tagP,tagImg3,tagImg4,tagButton)
    container_background.append(container_content)

}
container_content()
// ==== container_background 






// Container Card in_half
const bak = "B"
const in_half = document.querySelector(".in_half")
function container_content_2() {
    const container_content_2 = document.createElement("div")
    container_content_2.className = "container_content_2";


    const cont_2_background = document.createElement("div")
    cont_2_background.className = "cont_2_background"


    contentData.container_content_2.forEach((item, index , arr) =>{
  
      const table_content_one = document.createElement("form")
      table_content_one.className = "table_content_one"

      item.table_h2 === bak ? table_content_one.classList.add("class_table_drug"): null
  
     
      const table_h2 = document.createElement("h2")
      table_h2.className = "table_h2"
      table_h2.innerHTML = item.table_h2

           
      const table_h3 = document.createElement("h3")
      table_h3.className = "table_h3"
      table_h3.innerHTML = item.table_h3

      const table_p = document.createElement("p")
      table_p.className = "table_p"
      table_p.innerHTML = item.table_p
      

      table_content_one.append(table_h2,table_h3,table_p)
      cont_2_background.append(table_content_one)
      container_content_2.append(cont_2_background)
      in_half.append(container_content_2)
    })
    
}
container_content_2()

// Container Card in_half


//----------------container_content_3--------------------------------------------------------------------------------------

const container_content_3 = document.querySelector(".container_content_3")
function container_content_3_f () {
  const container_cont_3_background = document.createElement("div")
  container_cont_3_background.className = "container_cont_3_background"

  const h2_img = document.createElement("div")
  h2_img.className = "h2_img"

  
  const img_p = document.createElement("div")
  img_p.className = "img_p"

contentData.container_content_3.forEach(item => {

  const content_3_h2 = document.createElement("h2")
  content_3_h2.className = "content_3_h2"
  content_3_h2.innerHTML = item.content_3_h2

  const content_3_img_1 = document.createElement("img")
  content_3_img_1.className = "content_3_img_1"
  content_3_img_1.src = item.content_3_img_1


  const content_3_img = document.createElement("img")
  content_3_img.className = "content_3_img"
  content_3_img.src = item.content_3_img

  const cont_3_par = document.createElement("p")
  cont_3_par.className = "cont_3_par"
  cont_3_par.innerHTML = item.cont_3_par

  h2_img.append(content_3_h2,content_3_img_1)
  img_p.append(content_3_img,cont_3_par)
  container_cont_3_background.append(h2_img,img_p)
  container_content_3.append(container_cont_3_background)
})
}

container_content_3_f()


//----------------container_content_3--------------------------------------------------------------------------------------

const container_content_4 = document.querySelector(".container_content_4")
function container_content_4_f () {
  
  const content_4 = document.createElement("div")
  content_4.className = "content_4"

  const background_square = document.createElement("div") 
  background_square.className = "background_square"

  const content_4_img_1 = document.createElement("img")
  content_4_img_1.className = "content_4_img_1"
  content_4_img_1.src = contentData.container_content_4.content_4_img_1

  const content_4_img_2 = document.createElement("img")
  content_4_img_2.className = "content_4_img_2"
  content_4_img_2.src = contentData.container_content_4.content_4_img_2

  const content_4_img_3 = document.createElement("img")
  content_4_img_3.className = "content_4_img_3"
  content_4_img_3.src = contentData.container_content_4.content_4_img_3

  content_4.append(background_square,content_4_img_1,content_4_img_2,content_4_img_3)
  container_content_4.append(content_4)

}

container_content_4_f()

//----------------content_5_text--------------------------------------------------------------------------------------

const content_5_text = document.querySelector(".content_5_text")
function content_5_text_f () {

const content_5_background = document.createElement("div")
content_5_background.className = "content_5_background"

const cont_5_1block = document.createElement("div")
cont_5_1block.className = "cont_5_1block"

const content_5_h2 = document.createElement("h2")
content_5_h2.className = "content_5_h2"
content_5_h2.innerHTML = contentData.content_5_text.content_5_h2

const content_5_p = document.createElement("p")
content_5_p.className = "content_5_p"
content_5_p.innerHTML = contentData.content_5_text.content_5_p

const cont_5_2block = document.createElement("div")
cont_5_2block.className = "cont_5_2block"

const margin_top_p = document.createElement("p")
margin_top_p.className = "content_5_p margin_top_p"
margin_top_p.innerHTML = contentData.content_5_text.margin_top_p

const content_5_button = document.createElement("button")
content_5_button.className = "content_5_button"
content_5_button.innerHTML = contentData.content_5_text.content_5_button

cont_5_1block.append(content_5_h2,content_5_p)
cont_5_2block.append(margin_top_p,content_5_button)
content_5_background.append(cont_5_1block,cont_5_2block)
content_5_text.append(content_5_background)


}

content_5_text_f()


//----------------container_content_6--------------------------------------------------------------------------------------

const container_content_6 = document.querySelector(".container_content_6")
function container_content_6_f () {

  const container_content_6_background = document.createElement("div")
  container_content_6_background.className= "container_content_6_background"

  const container_content_6_qwert = document.createElement("div")
  container_content_6_qwert.className= "container_content_6_qwert"

  const contain_cont_6_img1 = document.createElement("img")
  contain_cont_6_img1.className = "contain_cont_6_img1"
  contain_cont_6_img1.src = contentData.container_content_6.contain_cont_6_img1

  const contain_cont_6_img2 = document.createElement("img")
  contain_cont_6_img2.className = "contain_cont_6_img2"
  contain_cont_6_img2.src = contentData.container_content_6.contain_cont_6_img2

  const contain_cont_6_img3 = document.createElement("img")
  contain_cont_6_img3.className = "contain_cont_6_img3"
  contain_cont_6_img3.src = contentData.container_content_6.contain_cont_6_img3

  const conta_content_6_1 = document.createElement("div")
  conta_content_6_1.className= "conta_content_6_1"

  const content_7_table = document.createElement("form")
  content_7_table.className= "content_7_table"

  const content_7_table_h2 = document.createElement("h2")
  content_7_table_h2.className = "content_7_table_h2"
  content_7_table_h2.innerHTML = contentData.container_content_6.content_7_table_h2

  const content_7_table_p = document.createElement("p")
  content_7_table_p.className = "content_7_table_p"
  content_7_table_p.innerHTML = contentData.container_content_6.content_7_table_p

  const content_7_btn = document.createElement("button")
  content_7_btn.className = "content_7_btn"
  content_7_btn.innerHTML = contentData.container_content_6.content_7_btn

  container_content_6_qwert.append(contain_cont_6_img1,contain_cont_6_img2,contain_cont_6_img3)
  content_7_table.append(content_7_table_h2,content_7_table_p,content_7_btn)
  conta_content_6_1.append(content_7_table)
  container_content_6_background.append(container_content_6_qwert,conta_content_6_1)
  container_content_6.append(container_content_6_background)

}

container_content_6_f()


//----------------content_8_text--------------------------------------------------------------------------------------

const content_8_text = document.querySelector(".content_8_text")
function content_8_text_f () {

  const content_8_text_background = document.createElement("div")
  content_8_text_background.className = "content_8_text_background"

  const quotes = document.createElement("i")
  quotes.className = "fa-solid fa-quote-left quotes"

  const content_8_p = document.createElement("p")
  content_8_p.className = "content_8_p"
  content_8_p.innerHTML = contentData.content_8_text.content_8_p

  content_8_text_background.append(quotes,content_8_p)
  content_8_text.append(content_8_text_background)
 }

 content_8_text_f()

//----------------container_content_9--------------------------------------------------------------------------------------

const container_content_9 = document.querySelector(".container_content_9")
function container_content_9_f () {

  const container_content_9_background = document.createElement("div")
  container_content_9_background.className = "container_content_9_background"

  const container_content_9_img1 = document.createElement("img")
  container_content_9_img1.className = "container_content_9_img1"
  container_content_9_img1.src = contentData.container_content_9.container_content_9_img1

  const container_content_9_img2 = document.createElement("img")
  container_content_9_img2.className = "container_content_9_img2"
  container_content_9_img2.src = contentData.container_content_9.container_content_9_img2

  const content_9_table = document.createElement("form")
  content_9_table.className = "content_9_table"

 const content_9_h2 = document.createElement("p")
 content_9_h2.className = "content_9_h2"
 content_9_h2.innerHTML = contentData.container_content_9.content_9_h2

 const span_cont_9 = document.createElement("span")
 span_cont_9.className = "span_cont_9"
 span_cont_9.innerHTML = contentData.container_content_9.span_cont_9

 const content_9_p = document.createElement("p")
 content_9_p.className = "content_9_p"
 content_9_p.innerHTML = contentData.container_content_9.content_9_p

 const content_9_btn = document.createElement("button")
 content_9_btn.className = "content_9_btn"
 content_9_btn.innerHTML = contentData.container_content_9.content_9_btn

 content_9_h2.append(span_cont_9)
 content_9_table.append(content_9_h2,content_9_p,content_9_btn)
 container_content_9_background.append(container_content_9_img1,container_content_9_img2,content_9_table)
 container_content_9.append(container_content_9_background)
}

container_content_9_f()

// ---------------------------container_content_10-------------------------------

const container_content_10 = document.querySelector(".container_content_10")
function container_content_10_f () {

  const content_10_content = document.createElement("div")
  content_10_content.className = "content_10_content"

  const content_10_form = document.createElement("form")
  content_10_form.className = "content_10_form"

  const content_10_h2 = document.createElement("h2")
  content_10_h2.className = "content_10_h2"
  content_10_h2.innerHTML = contentData.container_content_10.content_10_h2

  const content_10_input = document.createElement("div")
  content_10_input.className = "content_10_input"

  const p_name = document.createElement("p")
  p_name.className = "container_content_10_p p_name"
  p_name.innerHTML = contentData.container_content_10.p_name

  const input_name = document.createElement("input")
  input_name.className = "container_content_10_input input_name"
  input_name.placeholder = contentData.container_content_10.input_name
  input_name.type = "text"

  const p_email = document.createElement("p")
  p_email.className = "container_content_10_p p_email"
  p_email.innerHTML = contentData.container_content_10.p_email

  const input_email = document.createElement("input")
  input_email.className = "container_content_10_input input_email"
  input_email.placeholder = contentData.container_content_10.input_email
  input_email.type = "text"

  const container_content_10_submit = document.createElement("button")
  container_content_10_submit.className = "container_content_10_submit"
  container_content_10_submit.innerHTML = contentData.container_content_10.container_content_10_submit
  container_content_10_submit.type = "submit"

const container_content_10parag = document.createElement("p")
container_content_10parag.className = "container_content_10parag"
container_content_10parag.innerHTML = contentData.container_content_10.container_content_10parag

content_10_input.append(p_name,input_name,p_email,input_email,container_content_10_submit)
content_10_form.append(content_10_h2,content_10_input,container_content_10parag)
content_10_content.append(content_10_form)
container_content_10.append(content_10_content)

}

container_content_10_f()

// --------------------footer------------------------

const footer = document.querySelector("footer")

function footer_f () {

  const footer_background = document.createElement("div")
  footer_background.className = "footer_background"

  const footer_p = document.createElement("p")
  footer_p.className = "footer_p"
  footer_p.innerHTML = contentData.footer.footer_p

  const footer_div = document.createElement("div")
  footer_div.className = "footer_div"


  const footer_p_end = document.createElement("p")
  footer_p_end.className = "footer_p_end"
  footer_p_end.innerHTML = contentData.footer.footer_p_end

  const footer_a = document.createElement("a")
  footer_a.className = "footer_a"
  footer_a.innerHTML = contentData.footer.footer_a
  footer_a.href = "#"

  // footer_p_end.append(footer_a)
  footer_div.append(footer_a,footer_p_end)
  footer_background.append(footer_p,footer_div)
  footer.append(footer_background)
}

footer_f()





















