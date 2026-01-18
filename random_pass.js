const length_value = document.getElementById("length_value");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*";
const gen_btn = document.getElementById("gen_btn");
let input_disp = document.getElementById("input_box");


updatelength(localStorage.getItem("save_val") || 4);

length_value.addEventListener("input", () => {
  updatelength(length_value.value);
});

function updatelength(val) {
  const length_disp = document.getElementById("length_disp");
  length_disp.textContent = val;
  localStorage.setItem("save_val", val);
}

gen_btn.addEventListener("click", () => {
  disp_password();
});

function disp_password() {
  const saved_val = localStorage.getItem("save_val");
  let password = "";
  let options = "";
  let shuffled_options = ""
  const upper = document.getElementById("Uppercase");
  const lower = document.getElementById("Lowercase");
  const num = document.getElementById("Number");
  const sym = document.getElementById("sym");
  let check = 0;
  
  if(upper.checked )
  {
    options+="1";
    check+=1;
  }
  if(lower.checked)
  {
    options+="2";
    check+=1;
  }
  if(num.checked)
  {
    options+="3";
    check+=1;
  }
  if(sym.checked)
  {
    options+="4";
    check+=1;
  }
  if (check == 0)
  {
    options+="1234";
  }
  options_length = options.length;
  shuffled_options = options;
  for (i = 0;i<(saved_val - options.length);i++)
  {
    shuffled_options += options[Math.floor(Math.random()*options_length)];
  }
  console.log(shuffled_options);
  let arr = shuffled_options.split("");
  for (i = 0 ;i<shuffled_options.length;i++)
  {
    const random_index = Math.floor(Math.random()*shuffled_options.length);
    const temp = arr[random_index];
    arr[random_index] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  for(i = 0;i<saved_val;i++)
  {
     if(arr[i] == "1")
     {
       password+=uppercase[Math.floor(Math.random()*uppercase.length)];
     }
     else if(arr[i] == "2")
     {
       password+=lowercase[Math.floor(Math.random()*lowercase.length)];
     }
     else if(arr[i] == "3")
     {
      password+=number[Math.floor(Math.random()*number.length)];
     }
     else 
     {
      password+=symbols[Math.floor(Math.random()*symbols.length)];
     }
  }
  input_disp.value = password;
}
document.getElementById("copy").addEventListener("click",()=>{copy()});
function copy()
{
   navigator.clipboard.writeText(input_disp.value);
   const copy_msg = document.getElementById("copy_disp");
   copy_msg.classList.remove("hidden");
   copy_msg.classList.add("opacity-0");
   setTimeout(()=>{
    copy_msg.classList.add("transition-all");
    copy_msg.classList.remove("opacity-0");
    copy_msg.classList.add("opacity-100");
     copy_msg.classList.add("duration-300");

   },10)

   setTimeout(()=>{
    copy_msg.classList.remove("opacity-100");
    copy_msg.classList.add("opacity-0");
    copy_msg.classList.add("transition-all");
    copy_msg.classList.add("duration-300");
   },2000)
}



