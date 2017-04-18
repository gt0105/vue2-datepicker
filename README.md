# vue-multi-datepicker
vue2 multi datetime picker, datepicker, calendar

#### \- Return value as Date type to v-model

### Co-Developer : [namsangwan](https://github.com/namsangwan)

- - -

## Component Structure
\- This component has the following tree structure.<br/>
   So sub-component individual use is of course possible<br/>

* vue-multi-datetimepicker
  * vue-datetimepicker
    * vue-calendar
    * vue-timepicker
    
## V-Model
#### \- An object with two fields: startDate, endDate

# Demo
### \- [JsFiddle](https://jsfiddle.net/gt0105/skdeaaak/)

# Caution
\- Font resource path setting is required : @font-face in vue-multi-datetimepicker.css
   Use the files under the fonts folder

# Example

### Simple Usage
`
<vue-multi-datetimepicker v-model="searchDate"></vue-multi-datetimepicker>
`

### More Options

    <vue-multi-datetimepicker 
        :date-format="dateFormat"
        :month-format="monthFormat"
        :on-day-click="onDayClick"
        :disabled-to="disabledTo"
        :disabled-from="disabledFrom"
        :only-month="onlyMonth"
        :has-time-input=true
        v-model="searchDate"

        :time-format="timeFormat"
    ></vue-multi-datetimepicker>

### Single Calendar

    <vue-datetimepicker
            :date-format="dateFormat"
            :month-format="monthFormat"
            :on-day-click="onDayClick"
            :disabled-to="disabledTo"
            :disabled-from="disabledFrom"
            :only-month="onlyMonth"
            :has-time-input=true
            v-model="startDate"
    
            :time-format="timeFormat"
    ></vue-datetimepicker>

# Options
- has-date-input: Whether the calendar input box is exposed
- has-time-input: time input box exposed or not true if 00:00:00
- date-format: Date input box Exposure format Default is "yyyy-MM-dd"
- month-format: For monthly calendars, date input box Exposure format Default is "yyyy-MM"
- time-format: Time input box Exposure format Default is "HH:mm:ss"
- disable-from : Set selection limits for previous dates
- disable-to : Set selection limits for after dates
- minute-interval: interval in minutes of the time selection screen
- date-input-width: date input box width
- time-input-width: time input box width
- height: height
- onDayClick: function to be called when calendar is clicked Use when has-date-input is false<br>
  Input function is function (date, str) format, date is date value, str is yyyyMMdd string


### Reference
 \- We made it by referring to datepicker and timepicker as below.
 * datepicker : [vue2-calendar](https://github.com/icai/vue2-calendar)
 * timepicker : [vue-timepicker](https://github.com/phoenixwong/vue-timepicker)
