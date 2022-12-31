import { mapValues } from "lodash";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : ""
      ).replace(/\.00$/, "")
    );
  } catch (e) {
    console.log(e);
  }
};

export const getReference = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
  for (let i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

export const titleCase = (str) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};

export const hexToBase64 = (str) => {
  return btoa(
    String.fromCharCode.apply(
      null,
      str
        .replace(/\r|\n/g, "")
        .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
        .replace(/ +$/, "")
        .split(" ")
    )
  );
};

export const base64ToHex = (str) => {
  for (
    var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = [];
    i < bin.length;
    ++i
  ) {
    var tmp = bin.charCodeAt(i).toString(16);
    if (tmp.length === 1) tmp = "0" + tmp;
    hex[hex.length] = tmp;
  }
  return hex.join("");
};

export const getHumanDate = (isoformat) => {
  var readable = new Date(isoformat); // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 Gmargin-top-0400 (Eastern Daylight Time)"
  var m = readable.getMonth(); // returns 6 (note that this number is one less than the number of the month in isoformat)
  var d = readable.getDate(); // returns 15
  var y = readable.getFullYear(); // returns 2012

  // we define an array of the months in a year
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // we get the text name of the month by using the value of m to find the corresponding month name
  var mlong = months[m];
  return mlong + " " + d + ", " + y;
};

export const getReceiptDate = (isoformat) => {
  var readable = new Date(isoformat); // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 Gmargin-top-0400 (Eastern Daylight Time)"
  var m = readable.getMonth(); // returns 6 (note that this number is one less than the number of the month in isoformat)
  var d = readable.getDate(); // returns 15
  var y = readable.getFullYear(); // returns 2012

  // we define an array of the months in a year
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // we get the text name of the month by using the value of m to find the corresponding month name
  var mlong = months[m];
  return d + " " + mlong + " " + y;
};

export const getDate = (isoformat) => {
  var readable = new Date(isoformat); // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 Gmargin-top-0400 (Eastern Daylight Time)"
  var m = readable.getMonth(); // returns 6 (note that this number is one less than the number of the month in isoformat)
  var d = readable.getDate(); // returns 15

  // we define an array of the months in a year
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // we get the text name of the month by using the value of m to find the corresponding month name
  var mlong = months[m];
  return mlong + " " + d + ".";
};

export const getMaturityDate = (days) => {
  var someDate = new Date();
  return new Date(someDate.setDate(someDate.getDate() + days)).toISOString();
};

export const getMonth = (months) => {
  var dateObj = new Date();
  var month = new Date(
    dateObj.setMonth(dateObj.getMonth() + months)
  ).toISOString(); //
  return month;
};

export const getDesireTime = (time) => {
  var newDate = new Date(time);
  newDate.setHours(newDate.getHours() + 1);
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const closeModalOnClick = (event) => {
  document.querySelector(".modal-backdrop").addEventListener("click", (e) => {
    const isVisible = (elem) =>
      !!elem &&
      !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

    Array.from(
      document.querySelectorAll(".modal-backdrop .modal-content")
    ).forEach((element) => {
      if (!element.contains(e.target) && isVisible(element)) {
        event();
      }
    });
  });
};

export const closeMobileModalOnClick = (event) => {
  document
    .querySelector(".sample-mobile--menu")
    .addEventListener("click", (e) => {
      const isVisible = (elem) =>
        !!elem &&
        !!(
          elem.offsetWidth ||
          elem.offsetHeight ||
          elem.getClientRects().length
        );

      Array.from(document.querySelectorAll(".sample-menu--wrap")).forEach(
        (element) => {
          if (!element.contains(e.target) && isVisible(element)) {
            event();
          }
        }
      );
    });
};

export const closeMoreOnClick = (event) => {
  document.querySelector("body").addEventListener("click", (e) => {
    const isVisible = (elem) =>
      !!elem &&
      !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

    Array.from(document.querySelectorAll(".pop")).forEach((element) => {
      if (!element.contains(e.target) && isVisible(element)) {
        event();
      }
    });
  });
};

export const fallbackCopyTextToClipboard = (text) => {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed"; //avoid scrolling to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
};

export const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {},
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};

export const diff = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = date1;
  const secondDate = date2;
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};

export const toLocaleTime = (date) => {
  var isoDateTime = new Date(date);
  return isoDateTime.toLocaleDateString();
};

export const getBetweenMonths = (date1, date2) => {
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();
  if (month1 === 0) {
    //Have to take into account
    month1++;
    month2++;
  }
  return (year2 - year1) * 12 + (month2 - month1);
};

export const capitalize = (s) => {
  return s.toLowerCase().replace(/\b./g, function (a) {
    return a.toUpperCase();
  });
};

export const daysInThisMonth = () => {
  var date = new Date();
  var time = new Date(date.getTime());
  time.setMonth(date.getMonth() + 1);
  time.setDate(0);
  var days =
    time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
  return days;
};

export const totalDaysInThisMonth = () => {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

export const formatBalance = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
};

var currency_symbols = {
  USD: "$", // US Dollar
  EUR: "€", // Euro
  CRC: "₡", // Costa Rican Colón
  GBP: "£", // British Pound Sterling
  ILS: "₪", // Israeli New Sheqel
  INR: "₹", // Indian Rupee
  JPY: "¥", // Japanese Yen
  KRW: "₩", // South Korean Won
  NGN: "₦", // Nigerian Naira
  PHP: "₱", // Philippine Peso
  PLN: "zł", // Polish Zloty
  PYG: "₲", // Paraguayan Guarani
  THB: "฿", // Thai Baht
  UAH: "₴", // Ukrainian Hryvnia
  VND: "₫", // Vietnamese Dong
};

export const formatCurrency = (currency) => {
  if (currency_symbols[currency] !== undefined) {
    return currency_symbols[currency];
  }
  return `${currency} `;
};

export const currentYear = () => {
  var dt = new Date(); //Date constructor
  return dt.getUTCFullYear();
};

export const detectMobile = () => {
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    // eslint-disable-next-line no-useless-escape
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const isoStringOffset = (newDate) => {
  var date = new Date(newDate); // Or the date you'd like converted.
  return new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
};

export const inThirty = () => {
  const inThirtyMinutes = new Date(new Date().getTime() + 30 * 60 * 1000);
  return inThirtyMinutes;
};

export const checkEmpty = (obj) => {
  let check = false;
  for (var key in obj) {
    if (obj[key] === null || obj[key] === "") {
      check = true;
      break;
    }
  }
  return check;
};

export const checkEmptyFalseObject = (obj) => {
  let check = false;
  for (var key in obj) {
    if (obj[key] === null || obj[key] === "" || obj[key]) {
      check = true;
      break;
    }
  }
  return check;
};

export const checkFalseObject = (obj) => {
  let check = false;
  for (var key in obj) {
    if (!obj[key]) {
      check = true;
      break;
    }
  }
  return check;
};

export const emptyObject = (obj) => {
  return mapValues(obj, () => "");
};

export const userExists = (arr, key, value) => {
  return arr.some(function (el) {
    return el[key] === value;
  });
};

export const statePasswordObj = (value) => {
  return { ...value };
};

export const formatPhoneNumber = (value) => {
  var re = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/g;
  var subst = "($1) $2 $3";
  return value.replace(re, subst);
};

export const checkBlackList = (word, array) => {
  return array.some((substring) =>
    word.split(" ").includes(substring.toLowerCase())
  );
};

export const getBlacklistMatch = (array1, array2) => {
  return array2.filter((element) => array1.includes(element.toLowerCase()));
};

export const convertArrayToSentence = (array) => {
  return (
    array.slice(0, -2).join(", ") +
    (array.slice(0, -2).length ? ", " : "") +
    array.slice(-2).join(" & ")
  );
};

export const getFingerPrint = async () => {
  const fp = await FingerprintJS.load();

  // The FingerprintJS agent is ready.
  // Get a visitor identifier when you'd like to.
  const result = await fp.get();

  // This is the visitor identifier:
  const visitorId = result.visitorId;
  return visitorId;
};

export const generateUUID = () => {
  let d = new Date().getTime(),
    d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r && 0x7 | 0x8).toString(16);
  });
};

export const camelize = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const removeDuplicates = (arr) => {
  return arr.filter(function (item, index, inputArray) {
    return inputArray.indexOf(item) === index;
  });
};

export const isBetween = (x, min, max) => {
  return x >= min && x <= max;
};

export const setInputFilter = (textbox, inputFilter) => {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
};

export const validateNumber = (event) => {
  const keyCode = event.keyCode || event.which;
  const string = String.fromCharCode(keyCode);
  const regex = /[0-9,]|\./;

  if (!regex.test(string)) {
    event.returnValue = false;
    if (event.preventDefault) event.preventDefault();
  }
};

export const highlightAll = () => {
  setTimeout(() => {
    document.execCommand("selectAll", false, null);
  }, 0);
};

export const replaceJSX = (str, find, replace) => {
  const parts = str.split(find);
  const result = [];
  for (let i = 0; i < parts.length; i++) {
    result.push(parts[i]);
    if (i < parts.length - 1) result.push(replace);
  }
  return result;
};

export const getFormattedDate = (date) => {
  var realDate = new Date(date);
  var year = realDate.getFullYear();

  var month = (1 + realDate.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  return month + "/" + year;
};

export const convertObjectToArray = (obj) => {
  const newArray = Object.keys(obj).map((key) => {
    return [`${key}`, obj[`${key}`]];
  });
  return newArray;
};

export const validateExpiryDate = (s) => {
  // Check 2-2 digits
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(s)) {
    return false;
  }

  // Check month is 1 to 12 inclusive
  var b = s.split("/");
  if (b[0] < 1 || b[0] > 12) {
    return false;
  }

  // Check is this month or later
  var d = new Date();
  var c = (d.getFullYear() / 100) | (0 + "");
  if (new Date(c + b[1], b[0], 1) < d) {
    return false;
  }

  return true;
};

export const convertDateToYMD = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let dt = newDate.getDate();
  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  const convertedDate = `${year}-${month}-${dt}`;
  return convertedDate.toString();
};

export const groupArrayItems = (array, key) => {
  return array.reduce((array, items) => {
    const newKey = items[key];
    if (!array[newKey]) {
      array[newKey] = [];
    }
    array[newKey].push(items);
    return array;
  }, {});
};

export const validateEmail = (email) => {
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
};

export const getDaysFromDates = (fromDate, toDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(fromDate);
  const secondDate = new Date(toDate);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
};

export const redirectTo = (to, time) => {
  return window.setTimeout(function () {
    // Move to a new location or you can do something else
    window.location.href = to;
  }, time * 1000);
};

export const closeTab = () => {
  window.open("about:blank", "_self");
  window.close();
};

export const convertEnumToArray = (
  data,
  key = "name",
  identifier = "value"
) => {
  return Object.entries(data)
    .filter((e) => !isNaN(e[0]))
    .map((e) => ({ [key]: e[1], [identifier]: e[0] }));
};

export const pluckItems = (values, items, key = "id", name = "name") => {
  const pluckedItems = [];

  values.forEach((value) => {
    items.forEach((item) => {
      if (item[key] === value) {
        pluckedItems.push(name ? item.name : item);
      }
    });
  });

  return pluckedItems;
};

export const containsItem = (data) => {
  const { items, contains, key } = data;

  const result = items.find((item) => item[key] === contains);
  return result ? true : false;
};

export const trimString = (value, maxStringLength) => {
  if (!value) return "";

  return value.length > maxStringLength
    ? `${value.substring(0, maxStringLength)}...`
    : value;
};

export const convertToSpacedTitleCase = (value) => {
  const result = value.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const uuidV4Regex =
  /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
export const isValidV4UUID = (uuid) => uuidV4Regex.test(uuid);

export const sortAscending = (arg) => {
  const { items, itemType, keyArg } = arg;

  if (!items) throw new Error("items is required");

  if (!Array.isArray(items)) {
    throw new Error("items should be an array");
  }

  if (!itemType) throw new Error("itemType is required");

  if (itemType !== "object" && itemType !== "string") {
    throw new Error("itemType should be object or string");
  }

  if (itemType === "object" && !keyArg) {
    throw new Error("keyArg is required");
  }

  return items.sort(function (a, b) {
    const currentItem = keyArg ? a[keyArg].toLowerCase() : a.toLowerCase();
    const nextItem = keyArg ? b[keyArg].toLowerCase() : b.toLowerCase();

    if (currentItem < nextItem) return -1;
    if (currentItem > nextItem) return 1;
    return 0;
  });
};

export const sortDescending = (arg) => {
  const { items, itemType, keyArg } = arg;

  if (!items) throw new Error("items is required");

  if (!Array.isArray(items)) {
    throw new Error("items should be an array");
  }

  if (!itemType) throw new Error("itemType is required");

  if (itemType !== "object" && itemType !== "string") {
    throw new Error("itemType should be object or string");
  }

  if (itemType === "object" && !keyArg) {
    throw new Error("keyArg is required");
  }
  return items.sort(function (a, b) {
    const currentItem = keyArg ? b[keyArg].toLowerCase() : b.toLowerCase();
    const nextItem = keyArg ? a[keyArg].toLowerCase() : a.toLowerCase();
    if (currentItem < nextItem) return -1;
    if (currentItem > nextItem) return 1;
    return 0;
  });
};

export const reGroup = (list, key) => {
  const newGroup = {};
  list?.forEach((item) => {
    const newItem = Object.assign({}, item);
    newGroup[item[key]] = newGroup[item[key]] || [];
    newGroup[item[key]].push(newItem);
  });
  return newGroup;
};

export const rangeMock = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};


export const getOrderedData = (rawData, keys,order) =>{
  const resultOrderedData = {}
  const reOrder = (rawData, keys) =>{
    keys.forEach( (key,index) =>{
         resultOrderedData[key] = rawData[key]
    })
    return resultOrderedData
  }
  if(order=="asc"){
    let descArr= [...keys].sort((current, next) => (current > next ? -1 : 1));
    descArr = descArr.reverse()
    return reOrder(rawData,descArr )
  }else{
    const descArrSort = [...keys].sort((current, next) => (current > next ? -1 : 1));
    return reOrder(rawData,descArrSort )
  }
}



