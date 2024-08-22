   // click on todo text to see individual modal
   const input = document.getElementById("inp");
   const todoBtn = document.getElementById("todobutton");
   const list = document.querySelector(".list");
   const clearAll = document.querySelector(".all");
   const clearcompleted = document.querySelector(".Completed");
   clearAll.addEventListener("click", () => {
       if (confirm("It will delete all the pending and completed Todos, Are you sure you wants to delete everything ?")) {
           localStorage.removeItem('todos');
           showTodo();
       }
   });
   clearcompleted.addEventListener("click", () => {
       let data = JSON.parse(localStorage.getItem('todos'));
       if (confirm("It will delete all completed Todos, Are you sure you wants to delete ?")) {
           if (data) {
               let arr = data.filter((e) => {
                   return !e.status
               })
               if (arr.length == 0) {
                   localStorage.removeItem('todos')
               } else {
                   localStorage.setItem('todos', JSON.stringify(arr));
               }
               showTodo();
           }
       }
   });

   // for showing todos whenever there is some update and at initial load 
   const showTodo = () => {
       let data = JSON.parse(localStorage.getItem("todos"));
       if (data) {
           let completed = data.filter((element) => {
               return element.status
           })
           let Incompleted = data.filter((element) => {
               return !element.status
           })
           let complete_html = '';
           if (completed.length != 0) {
               complete_html = `<div class="listsection"><div class="collapseheader" id="comp" >Completed<div class="chevron"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg></div></div><div class="listelms">`+ completed
                       .map((element) => {
                           let { id, value } = element;
                           return `<div class="listelement" uin="${id}">
     <p>${value}</p>
     <div class="listdonebtns">
     <button class="btnss editodo svgbtns" id="edit" uin="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
     <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
   </svg></button>
     <button class="togglecheck btnss svgbtns" id="status" uin="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="success-svg-check bi bi-check-circle-fill" viewBox="0 0 16 16">
     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
   </svg></button>
     <button class="listdone btnss svgbtns" id="listd" uin="${id}">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
   </svg>
     </button>
     </div>
   </div>`;

                       })
                       .join("") + "</div></div>";
           }
           let Incomplete_html = '';
           if (Incompleted.length != 0) {
               Incomplete_html = `<div class="listsection"><div class='collapseheader' id="incomp" >Todo<div class="chevron"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
 <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg></div></div><div class="listelms">`+ Incompleted
                       .map((element) => {
                           let { id, value } = element;
                           return `<div class="listelement" uin="${id}">
     <p>${value}</p>
     <div class="listdonebtns">
     <button class="btnss editodo svgbtns" id="edit" uin="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
     <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
   </svg></button>
     <button class="togglecheck btnss svgbtns" id="status" uin="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16" style="
 ">
   <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"></path>
   <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
 </svg></button>
     <button class="listdone btnss svgbtns" id="listd" uin="${id}">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
   </svg>
     </button>
     </div>
   </div>`;
                       })
                       .join("") + "</div></div>";
           }
           list.innerHTML = `${Incomplete_html} ${complete_html}`;
       } else {
           list.innerHTML = "<p class='emptytodo'>Your Todos Will Appear Here</p>";
       }
   };
   // handling events for each todo
   list.addEventListener('click', (e) => {
       let a = e.target.closest('.listelement')
       if (a) {
           let uin = a.getAttribute('uin')
           if (e.target.closest('.togglecheck')) {
               toggleStatus(uin)
           } else if (e.target.closest('.listdone')) {
               removeTodo(uin)
           } else if (e.target.closest('.editodo')) {
               editTodo(uin, false)
           } else {
               let data = JSON.parse(localStorage.getItem('todos'));
               let myObj = data.find((obj) => obj.id == uin);
               let { value, time, last, status } = myObj;
               const modal = document.createElement('div')
               modal.classList.add('modal')
               let donenot = `<p class="donenot toggles"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-check2-circle" viewBox="0 0 16 16" style="
">
 <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"></path>
 <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
</svg>Incomplete</p>`;
               let donecomplete = `<p class="done toggles"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="16" height="16" class=" bi bi-check-circle-fill" viewBox="0 0 16 16">
   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
 </svg>Completed</p>`;
               modal.innerHTML = `<div class="cont"><div class="closeeditmodal"><button class="closeeditmodalbtn svgbtns"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
 </svg></button></div><svg
   version="1.1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   x="0px"
   y="0px"
   viewBox="0 0 1000 1000"
   enable-background="new 0 0 1000 1000"
   xml:space="preserve"
   class="svgcont"
 >
   <g>
     <g
       transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
     >
       <path
         d="M2072.8,4936.3c-36.4-3.8-174.3-17.2-306.5-28.7c-499.9-44.1-1137.7-172.4-1436.5-287.3c-208.8-80.4-229.8-97.7-229.8-199.2c0-310.3,367.7-2340.6,668.5-3689c70.9-316,72.8-321.8,124.5-331.4c283.5-57.5,1158.8,11.5,1649.1,130.2c950,231.8,1432.7,739.3,1693.2,1785.1c124.5,490.3,160.9,1072.6,90,1396.3c-139.8,641.6-549.7,1036.2-1227.7,1181.8c-130.2,26.8-268.1,38.3-565,44C2316.1,4942.1,2109.2,4940.1,2072.8,4936.3z M3001.8,4595.4c226-57.5,463.5-170.5,586.1-279.6c203-174.3,354.3-501.8,436.7-942.4l15.3-90L3925,3388.7c-65.1,57.5-126.4,101.5-136,97.7c-11.5-3.8-32.6-44.1-47.9-90l-26.8-82.4l157.1-147.5c149.4-143.7,155.1-153.2,155.1-235.6c0-46-5.7-111.1-11.5-145.6l-11.5-59.4l-182,172.4c-101.5,95.8-189.6,172.4-199.2,172.4c-15.3,0-53.6-153.2-42.1-176.2c3.8-7.7,86.2-80.4,183.9-162.8c97.7-80.4,185.8-160.9,197.3-176.2c15.3-21.1,13.4-55.5-5.8-134.1c-46-172.4-44-172.4-185.8-15.3c-70.9,80.4-151.3,159-178.1,178.1c-49.8,30.6-51.7,30.6-86.2-11.5c-19.2-23-34.5-55.5-34.5-72.8c0-17.2,86.2-118.8,191.5-224.1c105.3-107.3,191.5-204.9,191.5-216.4c0-40.2-78.5-231.8-111.1-272c-32.6-40.2-34.5-40.2-162.8,118.8c-247.1,306.5-233.7,298.8-293.1,185.8c-28.7-57.5-28.7-61.3,40.2-147.5c40.2-49.8,118.8-153.2,178.1-229.8l105.3-139.8l-44-95.8c-70.9-149.4-76.6-149.4-204.9,17.2c-151.3,191.5-235.6,275.8-272,268.1c-15.3-3.8-44.1-34.5-65.1-67l-36.4-63.2l136-147.5c72.8-82.4,149.4-176.2,168.6-208.8c32.6-61.3,30.6-63.2-15.3-101.5c-24.9-21.1-74.7-53.6-109.2-72.8l-61.3-34.5l-90,105.3c-49.8,57.5-139.8,157.1-199.2,218.3l-109.2,114.9l-49.8-32.6c-26.8-19.2-49.8-46-49.8-63.2c0-15.3,69-111.1,155.1-210.7c84.3-101.5,149.4-193.5,145.6-204.9c-3.8-13.4-61.3-38.3-128.3-55.6l-120.7-32.6l-160.9,170.5c-90,95.8-174.3,172.4-187.7,172.4c-36.4,0-124.5-40.2-124.5-57.5c0-7.7,40.2-63.2,88.1-126.4c93.9-118.8,149.4-216.4,136-229.8c-28.7-28.7-1076.4-130.2-1229.7-118.8l-95.8,5.7L977.2,1299c-141.7,750.8-442.4,2377-503.7,2727.5c-44,254.7-46,279.6-17.2,310.3c57.5,65.1,377.3,153.2,814,227.9c438.6,74.7,676.1,93.8,1118.6,88.1C2770,4647.1,2829.4,4641.3,3001.8,4595.4z"
       />
       <path
         d="M1057.7,4321.5c-70.9-11.5-250.9-61.3-314.1-86.2l-55.5-23l13.4-182c13.4-216.4,61.3-588,78.5-614.8c15.3-24.9,176.2-24.9,189.6-1.9c5.8,9.6-7.7,153.2-30.6,317.9c-46,340.9-49.8,325.6,109.2,344.8c214.5,26.8,203,19.2,197.3,139.8l-5.7,109.2l-67,1.9C1136.2,4329.1,1084.5,4327.2,1057.7,4321.5z"
       />
       <path
         d="M1967.5,3813.9c-383.1-42.1-488.4-88.1-488.4-206.9c0-103.4,206.9-1195.2,306.5-1624.2c38.3-162.8,44.1-174.3,95.8-185.8c69-15.3,319.9,19.2,498,69c318,88.1,595.7,293,708.7,522.9c63.2,128.3,114.9,337.1,114.9,473.1c0,130.2-67,365.8-147.5,521c-93.9,180-310.3,402.2-417.5,432.9C2547.8,3840.7,2189.6,3838.8,1967.5,3813.9z M2440.6,3557.2c224.1-76.6,436.7-442.4,436.7-754.6c0-145.6-63.2-273.9-195.4-392.7c-159-147.5-507.6-306.5-593.8-272c-21.1,7.7-40.2,67-61.3,180c-44.1,237.5-141.7,913.6-157.1,1084.1l-13.4,145.6l65.1,17.2C2028.8,3595.5,2342.9,3591.7,2440.6,3557.2z"
       />
       <path
         d="M7091,4763.9c-293-36.4-653.1-141.7-881.1-256.7c-185.8-93.9-444.4-277.7-614.8-438.6c-476.9-444.4-706.8-973-706.8-1618.5c0-923.2,475-1748.7,1170.3-2037.9c291.1-120.7,666.6-151.3,1087.9-88.1c762.3,111.1,1323.5,406,1580.2,827.4c339,559.3,480.7,1693.2,279.6,2229.5c-21.1,55.5-95.8,204.9-164.7,331.4c-335.2,603.3-612.9,888.7-984.5,1009.4c-99.6,30.6-182,40.2-411.8,44C7288.3,4769.7,7127.4,4767.7,7091,4763.9z M7681,4457.5c183.9-47.9,306.5-114.9,436.7-241.3c270.1-258.6,473.1-670.4,570.8-1155c38.3-185.8,65.1-411.8,51.7-411.8c-5.7,0-55.5,44.1-109.2,97.7c-113,111.1-145.6,113-180.1,7.7c-23-70.9-23-72.8,70.9-170.5c182-187.7,199.2-216.4,185.8-304.5c-19.1-137.9-86.2-415.6-103.4-425.2c-7.7-3.8-46,42.1-84.3,105.3c-103.4,166.6-220.3,310.3-243.2,295c-11.5-7.7-34.5-42.1-47.9-78.5l-28.7-65.1l122.6-166.6c157.1-210.7,205-291.1,205-339c0-46-122.6-270.1-143.7-264.3c-7.7,1.9-67.1,109.2-132.2,239.4c-107.2,214.5-120.7,235.6-164.7,229.8c-26.8-1.9-63.2-21.1-82.4-40.2c-32.6-32.6-30.7-40.2,59.4-185.8c122.6-197.3,195.4-342.8,195.4-388.8c0-40.2-101.5-136-143.6-136c-13.4,0-84.3,114.9-155.1,254.7c-141.8,268.1-168.6,295-250.9,227.9l-40.2-32.6l122.6-220.3c67-120.7,126.4-247.1,134.1-281.6c11.5-55.5,5.8-65.1-80.4-118.7c-51.7-32.6-107.3-59.4-122.6-59.4c-19.2,0-68.9,84.3-137.9,229.8c-114.9,245.2-143.7,270.1-216.4,191.5c-34.5-38.3-34.5-44,74.7-250.9c61.3-114.9,107.2-222.2,101.5-235.6c-11.5-26.8-166.6-88.1-224.1-88.1c-21.1,0-63.2,70.9-134.1,220.3c-55.6,120.7-107.3,220.3-116.8,220.3c-7.7,0-36.4-7.7-63.2-17.2l-46-19.2l82.4-204.9c46-113,80.4-212.6,74.7-222.2c-5.8-7.7-61.3-15.3-124.5-15.3c-114.9,0-114.9,0-143.7,72.8c-17.2,38.3-53.6,124.5-84.3,191.5c-49.8,107.3-61.3,118.8-114.9,118.8c-34.5,0-63.2-11.5-70.9-28.7c-5.7-17.2,15.3-103.4,47.9-191.5l59.4-162.8h-90c-241.3,1.9-572.7,139.8-777.6,327.5c-279.6,256.7-499.9,630.2-570.8,969.2c-76.6,367.7-24.9,838.9,136,1239.2c157,392.6,503.7,835.1,794.9,1017.1C6595,4449.8,7257.7,4566.6,7681,4457.5z"
       />
       <path
         d="M6265.5,3946.1c-231.8-191.5-367.8-385-421.4-597.6c-19.2-74.7-17.2-93.9,3.8-107.3c72.8-46,103.4-21.1,199.2,164.7c114.9,226,166.6,287.3,356.3,432.9c82.4,63.2,151.3,126.4,151.3,139.8c0,26.8-78.5,69-132.2,69C6405.4,4047.6,6334.5,4001.6,6265.5,3946.1z"
       />
       <path
         d="M6832.5,3237.4c-312.2-103.4-545.9-283.5-653.1-501.8c-47.9-101.5-55.5-136-55.5-287.3c0-206.9,36.4-289.2,189.6-440.5c201.1-195.4,492.2-298.8,737.4-260.5c273.9,42.1,578.4,258.6,691.4,486.5c174.3,356.3,11.5,823.6-340.9,986.4C7244.3,3291,7018.3,3298.7,6832.5,3237.4z M7273,2919.4c174.3-99.6,254.7-354.3,172.4-553.5c-68.9-160.9-247.1-275.8-475-302.6c-137.9-17.2-249,17.2-335.2,103.4c-252.8,252.8-185.8,588,149.4,760.4C6943.6,3009.4,7117.9,3005.6,7273,2919.4z"
       />
       <path
         d="M8226.8,31.1c-55.5-5.7-88.1-19.2-101.5-44.1c-99.6-185.8-291.1-3123.9-212.6-3269.5c11.5-23,53.6-51.7,93.8-63.2c126.4-36.4,463.5-74.7,791-88.1l319.9-13.4l40.2,113c120.7,318,457.8,1706.6,683.8,2798.3c70.9,346.7,70.9,350.5,34.5,390.7c-47.9,55.5-162.8,105.3-325.6,143.7c-103.4,23-256.7,32.5-687.6,36.4C8558.2,36.8,8270.9,36.8,8226.8,31.1z M9464.2-330.9c44.1-13.4,44.1-15.3,30.6-178.1c-7.7-90-19.2-176.2-26.8-189.6c-9.6-15.3-46,17.2-113,101.5c-101.5,124.5-136,145.6-170.5,101.5c-47.9-61.3-42.1-113,21.1-183.9c99.6-114.9,180-222.2,185.8-252.8c9.6-44.1-21.1-229.8-36.4-229.8c-7.7,0-63.2,53.6-122.6,118.8c-105.4,114.9-111.1,118.8-139.8,84.3c-47.9-63.2-34.5-111.1,88.1-316l116.8-195.4l-23-114.9c-13.4-63.2-30.6-116.8-38.3-122.6c-5.7-3.8-67,70.9-134.1,166.6L8979.6-1369l-34.5-42.1c-19.2-23-34.5-61.3-34.5-84.3c0-21.1,65.1-132.2,145.6-245.2l143.7-204.9l-30.6-72.8c-30.6-70.8-32.6-70.8-59.4-34.5c-113,155.2-203,258.6-235.6,275.8c-30.6,17.2-44,11.5-76.6-28.7c-68.9-88.1-53.6-126.4,126.4-314.1l164.7-174.3l-24.9-109.2c-13.4-59.4-28.7-118.8-36.4-132.2c-7.7-13.4-55.5,36.4-126.4,132.2c-63.2,84.3-134.1,166.6-157.1,182c-65.1,44.1-101.5,19.2-101.5-65.1c0-61.3,23-101.5,136-245.2c204.9-256.7,195.4-235.6,170.5-377.3c-30.6-172.4-36.4-187.7-76.6-187.7c-24.9,0-70.9,51.7-141.8,159c-137.9,208.8-155.1,224.1-206.9,170.5l-40.2-40.2l49.8-113c80.4-178.1,72.8-185.8-114.9-157.1c-226,34.5-204.9-1.9-189.6,352.4c24.9,609.1,126.4,2357.8,137.9,2394.2c11.5,34.5,30.6,36.4,532.5,24.9C9184.5-313.7,9439.3-323.3,9464.2-330.9z"
       />
       <path
         d="M8560.1-562.7c-28.7-47.9-132.2-691.4-116.9-718.3c5.8-7.6,47.9-15.3,92-15.3c99.6,0,93.8-15.3,136,419.5c30.6,317.9,28.7,327.5-61.3,327.5C8586.9-549.3,8563.9-555,8560.1-562.7z"
       />
       <path
         d="M4296.5-129.8c-371.6-17.2-576.5-42.1-595.7-76.6c-26.8-42.1-72.8-777.6-80.4-1300.5l-5.7-333.3l95.8-15.3c53.6-7.7,270.1-21.1,484.6-30.6c212.6-9.6,390.7-21.1,394.6-24.9c15.3-15.3,49.8-611,88.1-1559.1c23-526.7,46-1005.6,53.6-1063l13.4-105.3l105.3-15.3c111.1-17.2,1241.1-3.8,1413.5,17.2c74.7,9.6,109.2,23,128.3,53.7c47.9,74.7,68.9,475,80.4,1597.4c11.5,1112.8,11.5,1118.6,51.7,1132c23,9.6,233.7,21.1,471.2,26.8c237.5,5.8,453.9,19.2,482.7,30.7c42.1,15.3,53.6,34.5,65.1,111.1c30.7,206.9-19.1,1494-59.4,1536.1c-26.8,24.9-555.5,36.4-1666.4,36.4C5164.2-114.5,4480.4-122.2,4296.5-129.8z M6953.1-447.8l233.7-11.5v-528.6c0-291.1-7.7-540.1-17.2-555.4c-13.4-21.1-90-23-496.1-1.9c-262.4,13.4-492.2,19.2-507.6,13.4c-17.2-5.7-42.1-51.7-53.6-99.6l-23-88.1l-111.1,107.3c-59.4,57.5-118.8,105.3-130.3,105.3c-26.8,0-59.4-65.1-59.4-116.8c0-28.7,53.6-97.7,153.2-201.1l153.2-157.1v-118.8v-118.8l-80.4,65.1c-218.3,176.2-268.2,208.8-295,185.8c-15.3-11.5-26.8-44.1-26.8-72.8c0-38.3,42.1-88.1,182-218.3l182-168.6v-176.2v-174.3l-137.9,153.2c-180,195.4-266.2,275.8-296.9,275.8c-17.2,0-24.9-30.6-24.9-99.6v-101.5l222.2-222.2l224.1-224.1l9.6-136c3.8-74.7,3.8-136-3.8-136c-7.7,0-103.4,80.4-214.5,178.1c-300.7,262.4-321.8,270.1-346.7,122.6c-9.6-65.1-3.8-72.8,120.7-189.6c72.8-65.1,199.2-183.9,281.6-262.4l147.5-141.7v-203v-203l-264.3,264.3c-143.7,143.7-273.9,262.4-287.3,262.4c-32.6,0-65.1-91.9-49.8-141.7c7.7-21.1,145.6-174.3,306.4-339c229.8-233.7,295-310.3,295-350.5c0-46-7.7-49.8-74.7-49.8c-68.9,0-93.8,17.2-329.4,239.4c-141.7,132.2-262.4,239.4-270.1,239.4c-5.7,0-17.2-26.8-24.9-59.4c-13.4-55.6-1.9-70.9,162.8-231.8c95.8-93.8,170.5-182,166.6-193.4c-5.7-17.2-86.2-21.1-293-17.2c-157.1,1.9-295,7.7-306.4,11.5c-15.3,5.7-24.9,331.3-34.5,1078.3c-13.4,1162.6-26.8,1616.6-51.7,1656.8c-13.4,19.2-118.7,24.9-499.9,24.9h-484.6l5.7,498c5.8,639.7,1.9,618.7,105.3,628.2C4252.5-434.4,6713.7-434.4,6953.1-447.8z"
       />
       <path
         d="M4154.8-792.5c-7.7-72.8-13.4-214.5-13.4-316c0-185.8,0-187.7,49.8-199.2c84.3-21.1,93.8,9.6,99.6,325.6l7.7,293l-46,11.5C4172-654.6,4166.3-662.3,4154.8-792.5z"
       />
       <path
         d="M1890.9-168.1c-559.3-23-990.2-97.7-1082.2-189.6c-53.6-53.6-65.1-231.7-51.7-909.8c17.2-838.9,82.4-1873.2,168.6-2643.2c57.5-532.5,93.9-706.8,147.5-727.8c155.1-59.4,1831.1-65.1,1890.5-7.7c67,67,116.8,1363.7,128.3,3302.1l5.7,938.5l-44,82.4c-69,130.3-114.9,141.7-674.2,162.8C2300.7-156.6,2080.5-160.5,1890.9-168.1z M2706.8-514.8c46-84.3,44-685.7,0-685.7c-7.7,0-69,44.1-134.1,95.8c-65.1,53.6-126.4,95.8-136,95.8c-23,0-38.3-51.7-38.3-134.1c0-70.9,7.7-78.5,151.3-180c170.5-118.8,159-92,183.9-408c7.7-88.1,5.7-139.8-7.7-139.8c-9.6,0-72.8,59.4-137.9,134.1c-134.1,149.4-168.5,170.5-203,122.6c-55.5-74.7-30.6-128.3,147.5-325.6c95.8-103.4,178.1-206.9,183.9-227.9c5.7-21.1,7.7-109.2,3.8-197.3l-5.7-159l-114.9,149.4c-157.1,203-239.4,295-260.5,281.6c-9.6-5.7-17.2-42.1-17.2-82.4c0-61.3,24.9-105.3,159-281.6c88.1-114.9,172.4-229.8,183.9-254.8c13.4-24.9,28.7-147.5,34.5-277.7c11.5-270.1,34.5-275.8-222.2,51.7c-97.7,122.6-189.6,224.1-203,224.1c-26.8,0-67-111.1-67-182c1.9-21.1,84.3-128.3,185.8-239.4c285.4-312.2,275.8-296.9,270.1-471.2l-5.7-149.4l-218.3,247.1c-118.8,137.9-231.8,256.7-247.1,266.2c-21.1,11.5-40.2,5.7-65.1-24.9c-47.9-61.3-34.5-78.5,266.2-394.6l254.7-268.1v-172.4l-1.9-172.4l-49.8,57.5c-139.8,162.8-490.3,526.7-505.6,526.7c-17.2,0-34.5-34.5-63.2-126.4c-9.6-30.7,28.7-93.9,180-287.3c105.3-136,191.5-252.8,191.5-260.5c0-9.6-42.1-15.3-93.9-15.3c-90,0-99.6,3.8-166.6,91.9c-182,229.8-252.8,273.9-321.8,203c-28.7-26.8-23-38.3,55.5-136c132.2-162.8,132.2-164.7-178.1-155.1c-385,9.6-379.2,1.9-432.9,475c-84.3,733.6-164.7,1957.5-178.1,2712.1c-13.4,691.4-36.4,622.5,214.5,658.9c262.4,36.4,540.1,51.7,971.1,55.5C2680-472.7,2683.8-472.7,2706.8-514.8z"
       />
       <path
         d="M1369.9-869.1c-17.2-5.7-24.9-59.4-24.9-174.3c0-214.5,36.4-601.4,57.5-624.4c9.6-9.6,40.2-7.7,72.8,5.7c49.8,21.1,57.5,34.5,67,136c11.5,111.1,1.9,486.5-17.2,609.1c-7.7,55.6-15.3,61.3-70.9,59.4C1419.7-857.6,1381.4-863.4,1369.9-869.1z"
       />
       <path
         d="M8179-3537.2c-415.6-74.7-607.2-281.6-586.1-630.2c11.5-180,59.4-281.5,180-373.5c314.1-241.3,860-203,1145.4,76.6c124.5,124.5,155.1,199.2,155.1,383.1c0,145.6-3.8,162.8-63.2,249c-80.4,114.9-199.2,208.8-331.4,258.6C8563.9-3529.6,8315-3512.3,8179-3537.2z M8435.6-3786.2c252.8-70.9,354.3-415.6,160.9-544c-84.3-53.6-273.9-93.8-386.9-78.5c-166.6,21.1-256.7,124.5-256.7,296.9c0,139.8,103.4,270,250.9,316C8307.3-3763.2,8345.6-3761.3,8435.6-3786.2z"
       />
       <path
         d="M8269-3870.5c-93.9-44-178.1-136-191.5-208.8c-21.1-111.1-7.7-137.9,72.8-143.7c93.8-7.7,124.5,19.2,132.1,116.8c5.7,70.9,13.4,84.3,74.7,113c90,42.1,122.6,80.4,90,107.3C8403-3849.4,8328.3-3843.7,8269-3870.5z"
       />
     </g>
   </g>
 </svg>
 <div class="modalstatuscont"><button class="modaltodostatus">${(status) ? donecomplete : donenot}</button></div>
 <div class="todoshowbig contdiv">
 <div class='headerforvalue'><span># Value</span><button class="modaledit svgbtns"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
 <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg></button></div>
   <p class="modalval">${value}</p>
 </div>
 <div class="datetime contdiv">
   <p><strong>Time: </strong>${time}</p>
   <p class="lastmod"><strong>Last Modified: </strong>${last}</p>

 </div>
 <div class="btndelmod contdiv">
   <button class="mynameisbtn" id="removemodalbtn">Remove</button>
   <button class="mynameisbtn" id="closemodalbtn" >Close</button>
 </div></div>`;
               document.body.appendChild(modal);
               modal.addEventListener('click', (e) => {
                   if (e.target.closest('.cont')) {
                       if (e.target.closest('.modaledit')) {
                           editTodo(uin, true)
                       } else if (e.target.closest('.modaltodostatus')) {
                           let { status, last } = toggleStatus(uin)
                           modal.querySelector('.modaltodostatus').innerHTML = (status) ? donecomplete : donenot
                           modal.querySelector('.lastmod').innerHTML = `<strong>Last Modified: </strong>${last}`
                       } else if (e.target.closest('#removemodalbtn')) {
                           removeTodo(uin)
                           modal.remove()
                       } else if (e.target.closest('#closemodalbtn') || e.target.closest('.closeeditmodalbtn')) {
                           modal.remove()
                       }
                   } else if (!e.target.closest('.toggles')) {
                       modal.remove();
                   }
               })

           }
       } else {
           //handling the collapsible's events
           let collpaser = e.target.closest('.collapseheader')
           if (collpaser) {
               collpaser.parentElement.classList.toggle('collapser')
           }
       }
   })
   const editTodo = (uin, formodal) => {
       const data = JSON.parse(localStorage.getItem('todos'))
       const modal_edit = document.createElement("div");
       let { value } = data.find((obj) => obj.id == uin)
       modal_edit.classList.add('modal_edit')
       modal_edit.innerHTML = `
<div class="editcont">
<div class="closeeditmodal"><button class="closeeditmodalbtn svgbtns"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></button></div>
<input id="editvalue" value="${value}"/>
<div class="btnmodalforedit">
<button class="savedit editbtn">Save</button>
<button class="canceledit editbtn">Cancel</button>
</div>
</div>
`;
       document.body.appendChild(modal_edit);
       let ediitvalue = document.querySelector('#editvalue')
       ediitvalue.focus()
       ediitvalue.addEventListener('keypress', (e) => {
           if (e.key == "Enter") {
               e.preventDefault();
               document.querySelector(".savedit").click();
           }
       })
       modal_edit.addEventListener('click', (e) => {
           if (!e.target.closest('.editcont') || e.target.closest('.closeeditmodalbtn') || e.target.closest('.canceledit')) {
               modal_edit.remove()
           } else if (e.target.closest('.savedit')) {
               let arr = data.map((element) => {
                   if (element.id == uin) {
                       let value = escapeHtml(ediitvalue.value)
                       let last = new Date().toLocaleString()
                       return { ...element, last, value }
                   }
                   return element;
               })
               localStorage.setItem('todos', JSON.stringify(arr))
               showTodo()
               let elem = arr.find(obj => obj.id == uin)
               if (formodal) {
                   document.querySelector('.modalval').innerHTML = elem.value
                   document.querySelector('.lastmod').innerHTML = `<strong>Last Modified: </strong>${elem.last}`
               }
               modal_edit.remove()
           }
       })
   }
   const removeTodo = (uin) => {
       let data = JSON.parse(localStorage.getItem("todos"));
       let arr = data.filter((element) => {
           return element.id != uin;
       });
       if (arr.length == 0) {
           localStorage.removeItem('todos');
       } else {
           localStorage.setItem("todos", JSON.stringify(arr));
       }
       showTodo();
   };
   const escapeHtml = (unsafe) => {
       return unsafe
           .replaceAll("&", "&amp;")
           .replaceAll("<", "&lt;")
           .replaceAll(">", "&gt;")
           .replaceAll('"', "&quot;")
           .replaceAll("'", "&#039;");
   };
   const addTodo = () => {
       let val = input.value.trim();
       let timet = new Date().toLocaleString();
       if (val != "") {
           let prevtodos = localStorage.getItem("todos")
               ? JSON.parse(localStorage.getItem("todos"))
               : [];
           let value = [
               {
                   id: Math.random().toString(16).slice(2),
                   value: escapeHtml(val),
                   time: timet,
                   status: false,
                   last: timet
               },
               ...prevtodos,
           ];
           localStorage.setItem("todos", JSON.stringify(value));
           showTodo();
       }
       input.value = "";
   };
   todoBtn.addEventListener('click', () => { addTodo() })

   input.addEventListener("keypress", function (event) {
       if (event.key == "Enter") {
           event.preventDefault();
           todoBtn.click();
       }
   });
   const toggleStatus = (uin) => {
       let data = JSON.parse(localStorage.getItem("todos"));

       let arr = data.map((element) => {
           if (element.id == uin) {
               let status = !element.status
               let last = new Date().toLocaleString();
               return { ...element, last, status }
           }
           return element;
       });
       localStorage.setItem("todos", JSON.stringify(arr));
       showTodo();
       return arr.find((obj) => obj.id == uin);
   }
   showTodo();
   // for dark mode 
   const dark = document.querySelector('.dark');
   const themecont = document.querySelector('.themecont')
   const themebtns = document.querySelector('.theme_modal')
   const themechanger = () => {
       let theme = localStorage.getItem('theme');
       if (theme == "dark") {
           document.body.classList.add('darkmode')
       } else if (theme == "light") {
           document.body.classList.remove('darkmode')
       } else if (theme == 'device') {
           if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
               document.body.classList.add('darkmode')
           } else {
               document.body.classList.remove('darkmode')
           }
       }
   }
   dark.addEventListener('click', () => {
       themecont.classList.toggle('showcont')
   })
   // for closing modals when clicked outside
   window.addEventListener('click', (e) => {
       if (!e.target.closest(".showcont") && !e.target.closest(".dark")) {
           themecont.classList.remove('showcont')
       }
   })
   themebtns.addEventListener('click', (e) => {
       let targetelement = e.target.closest('.thememodalbtns')
       if (targetelement) {
           localStorage.setItem('theme', targetelement.getAttribute('id'))
           themecont.classList.remove('showcont')
           themechanger()
       }
   })

   if (!localStorage.getItem('theme')) {
       localStorage.setItem('theme', 'device')
       themechanger()
   } else {
       themechanger()
   }
   // reacting to changes in device theme if theme is device default 
   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
       const newColorScheme = event.matches ? "dark" : "light";
       if (localStorage.getItem('theme') == 'device') {
           if (newColorScheme == 'light') {
               document.body.classList.remove('darkmode')
           } else {
               document.body.classList.add('darkmode')
           }
       }
   });