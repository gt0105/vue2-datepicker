# vue-multi-datetime-picker
vue2 multi datetime picker, calendar

#### \- Return value as Date type to v-model

## Component Structure
\- This component has the following tree structure.<br/>
   So sub-component individual use is of course possible<br/>

* vue-multi-datetimepicker
  * vue-datetimepicker
    * vue-calendar
    * vue-timepicker
    
## V-Model
#### \- An object with two fields: startDate, endDate

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
- Has-date-input: Whether the calendar input box is exposed
- Has-time-input: time input box exposed or not true if 00:00:00
- Date-format: Date input box Exposure format Default is "yyyy MM dd day"
- Time-format: Time input box Exposure format Default is "HH: mm: ss"
- Minute-interval: interval in minutes of the time selection screen
- Date-input-width: date input box width
- Time-input-width: time input box width
- Height: height
- OnDayClick: function to be called when calendar is clicked Use when has-date-input is false<br>
  Input function is function (date, str) format, date is date value, str is yyyyMMdd string


### Reference
 \- I made it by referring to datepicker and timepicker as below.
 * datepicker : [vue2-calendar](https://github.com/icai/vue2-calendar)
 * timepicker : [vue-timepicker](https://github.com/phoenixwong/vue-timepicker)
 
### Co-Developer : nsw@gmail.com
