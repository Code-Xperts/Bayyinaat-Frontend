// importing local storage
import { useState, useCallback } from 'react';

// local storage function that retreives the data
export async function retrieveItem(key) {
  try {
    const retrievedItem = localStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
  }
  return
}


// store data in lcoalstorage
export async function storeItem(key, item) {
  try {
    var jsonOfItem = localStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (error) {
  }
}


//validing email
export function validateEmail(text) {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {

    return false;
  }
  else {
    return true;
  }
}

export function formatDate(dateObj) {
  var month = dateObj.getMonth() + 1;
  if (month < 10) {
      month = "0" + month;
      if (dateObj.getDate() < 10) {
          const dat = "0" + dateObj.getDate();
          let date = dateObj.getFullYear() + "-" + month + "-" + dat;
          return date
      }
      else {
          let date = dateObj.getFullYear() + "-" + month + "-" + dateObj.getDate()
          return date
      }
  }
  else {
      if (dateObj.getDate() < 10) {
          const dat = "0" + dateObj.getDate()
          let date = dateObj.getFullYear() + "-" + month + "-" + dat
          return date
      }
      else {
          let date = dateObj.getFullYear() + "-" + month + "-" + dateObj.getDate()
          return date
      }

  }
}

// export  function timeAgo (time)  {
//   const date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " "));
//   const diff = (new Date().getTime() - date.getTime()) / 1000;
//   const dayDiff = Math.floor(diff / 86400);

//   if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
//     return dayjs(time).format("MMMM DD, YYYY");
//   }

//   return (
//     (dayDiff === 0 &&
//       ((diff < 60 && "just now") ||
//         (diff < 120 && "1 minute ago") ||
//         (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
//         (diff < 7200 && "1 hour ago") ||
//         (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
//     (dayDiff === 1 && "Yesterday") ||
//     (dayDiff < 7 && dayDiff + " days ago") ||
//     (dayDiff < 31 && Math.ceil(dayDiff / 7) + " weeks ago")
//   );
// };


// common Navigations



