// multi datetime picker
    Vue.component('vue-multi-datetimepicker', {
        template: '#vue-multi-date-time-picker-template',
        props: {
            value: {
                type: Object,
                default: function () {
                    return {
                        startDate: new Date(),
                        endDate: new Date()
                    }
                }
            },
            height: {
                type: String,
                default: '20px'
            },
            dateFormat: {
                default: 'yyyy-MM-dd'
            },
            monthFormat: {
                default: 'yyyy-MM'
            },
            dateInputWidth: {
                type: String,
                default: '140px'
            },
            clearButton: {
                type: Boolean,
                default: false
            },
            lang: {
                type: String,
                default: navigator.language
            },
            placeHolder: {
                type: String,
                default: "Please select a date"
            },
            hasDateInput: {
                type: Boolean,
                default: true
            },
            pane: {
                type: Number,
                default: 1
            },
            borderWidth: {
                type: Number,
                default: 2
            },
            onDayClick: {
                type: Function,
                default : function () {}
            },
            changePane: {
                type: Function,
                default : function () {}
            },
            specialDays: {
                type: Object,
                default : function () {
                    return {}
                }
            },
            rangeBus: {
                type: Function,
                default : function () {
                    // return new Vue()
                }
            },
            rangeStatus: {
                type: Number,
                default: 0
            },
            hasTimeInput: {
                type: Boolean,
                default: false
            },
            /* timepicker prop */
            timeFormat:{
                type: String,
                default: 'HH:mm:ss'
            },
            timeInputWidth: {
                type: String,
                default: '100px'
            },
            id: '',
            hideClearButton: {type: Boolean, Default : true},
            minuteInterval: {type: Number},
            secondInterval: {type: Number},
            minuteSelectStartValue: {type: Number},
            secondSelectStartValue: {type: Number},
            disabledTo : {
                type: Date,
                default: null
            },
            disabledFrom : {
                type: Date,
                default: null
            },
            onlyMonth : {
                type: Boolean,
                default: false
            }
        },
        data : function() {
            return {
                startDateValue: this.value.startDate,
                endDateValue: this.value.endDate
            }
        },
        created : function () {
            this.setDateValue();
        },
        methods : {
            setDateValue: function() {
                if (this.onlyMonth) {
                    this.startDateValue = new Date(this.value.startDate.getFullYear(), this.value.startDate.getMonth(), 1, 0, 0, 0);
                    this.endDateValue = new Date(this.value.endDate.getFullYear(), this.value.endDate.getMonth() + 1, 0, 23, 59, 59);
                } else {
                    this.startDateValue = new Date(this.value.startDate.getFullYear(), this.value.startDate.getMonth(), this.value.startDate.getDate(), 0, 0, 0);
                    this.endDateValue = new Date(this.value.endDate.getFullYear(), this.value.endDate.getMonth(), this.value.endDate.getDate(), 23, 59, 59);
                }
            }
        },
        watch: {
            startDateValue: function () {
                if (this.startDateValue > this.endDateValue) {
                    if (this.onlyMonth) {
                        this.endDateValue = new Date(this.startDateValue.getFullYear(), this.startDateValue.getMonth() + 1, 0, 23, 59, 59);
                    } else {
                        this.endDateValue = new Date(this.startDateValue.getFullYear(), this.startDateValue.getMonth(), this.startDateValue.getDate(), 23, 59, 59);
                    }
                }

                this.$emit('input',
                    {
                        startDate : this.startDateValue,
                        endDate : this.endDateValue
                    });
            },
            endDateValue: function () {
                if (this.startDateValue > this.endDateValue) {
                    if (this.onlyMonth) {
                        this.startDateValue = new Date(this.endDateValue.getFullYear(), this.endDateValue.getMonth(), 1, 0, 0, 0);
                    } else {
                        this.startDateValue = new Date(this.endDateValue.getFullYear(), this.endDateValue.getMonth(), this.endDateValue.getDate(), 0, 0, 0);
                    }
                }

                this.$emit('input',
                    {
                        startDate : this.startDateValue,
                        endDate : this.endDateValue
                    });
            },
            onlyMonth: function() {
                if (this.onlyMonth) {
                    this.setDateValue();
                }
            },
            value : function() {
                this.startDateValue = this.value.startDate;
                this.endDateValue = this.value.endDate;
            }
        },
        template:
        '<span class="vue-multi-date-time-picker-template">'+
        '<vue-datetimepicker '+
        ':placeholder="placeHolder" '+
        ':pane="pane" '+
        ':clear-button="clearButton" '+
        ':has-input="hasDateInput" '+
        ':date-format="dateFormat" '+
        ':month-format="monthFormat" '+
        ':on-day-click="onDayClick" '+
        ':date-input-width="dateInputWidth" '+
        ':height="height" '+
        ':disabled-to="disabledTo" '+
        ':disabled-from="disabledFrom" '+
        ':only-month="onlyMonth" '+
        'v-model="startDateValue" '+

        ':time-format="timeFormat" '+
        ':hideClearButton="hideClearButton" '+
        ':minuteInterval="minuteInterval" '+
        ':secondInterval="secondInterval" '+
        ':minuteSelectStartValue="minuteSelectStartValue" '+
        ':secondSelectStartValue="secondSelectStartValue" '+
        ':time-input-with="timeInputWidth" '+
        ':has-time-input="hasTimeInput">'+
        '</vue-datetimepicker>'+
        ' ~ '+
        '<vue-datetimepicker '+
        ':placeholder="placeHolder" '+
        ':pane="pane" '+
        ':clear-button="clearButton" '+
        ':has-input="hasDateInput" '+
        ':date-format="dateFormat" '+
        ':month-format="monthFormat" '+
        ':on-day-click="onDayClick" '+
        ':date-input-width="dateInputWidth" '+
        ':height="height" '+
        ':disabled-to="disabledTo" '+
        ':disabled-from="disabledFrom" '+
        ':only-month="onlyMonth" '+
        ':last-date-yn=true '+
        'v-model="endDateValue" '+

        ':time-format="timeFormat" '+
        ':hideClearButton="hideClearButton" '+
        ':minuteInterval="minuteInterval" '+
        ':secondInterval="secondInterval" '+
        ':minuteSelectStartValue="minuteSelectStartValue" '+
        ':secondSelectStartValue="secondSelectStartValue" '+
        ':time-input-with="timeInputWidth" '+
        ':has-time-input="hasTimeInput">'+
        '</vue-datetimepicker>'+
        '</span>'
    })


    // datetime picker
    Vue.component('vue-datetimepicker', {
        template: '#vue-date-time-picker-template',
        props: {
            value: {
                type: Date,
                default: function() {
                    return new Date()
                }
            },
            height: {
                type: String,
                default: '20px'
            },
            dateFormat: {
                default: 'yyyy-MM-dd'
            },
            monthFormat: {
                default: 'yyyy-MM'
            },
            dateInputWidth: {
                type: String,
                default: '140px'
            },
            clearButton: {
                type: Boolean,
                default: false
            },
            lang: {
                type: String,
                default: navigator.language
            },
            placeholder: {
                type: String
            },
            hasDateInput: {
                type: Boolean,
                default: true
            },
            pane: {
                type: Number,
                default: 1
            },
            borderWidth: {
                type: Number,
                default: 2
            },
            onDayClick: {
                type: Function,
                default : function () {}
            },
            changePane: {
                type: Function,
                default : function () {}
            },
            specialDays: {
                type: Object,
                default : function () {
                    return {}
                }
            },
            rangeBus: {
                type: Function,
                default : function () {
                    // return new Vue()
                }
            },
            rangeStatus: {
                type: Number,
                default: 0
            },
            hasTimeInput: {
                type: Boolean,
                default: false
            },
            /* timepicker prop */
            timeFormat:{
                type: String,
                default: 'HH:mm:ss'
            },
            timeInputWidth: {
                type: String,
                default: '100px'
            },
            id: '',
            hideClearButton: {type: Boolean, Default : true},
            minuteInterval: {type: Number},
            secondInterval: {type: Number},
            minuteSelectStartValue: {type: Number},
            secondSelectStartValue: {type: Number},
            disabledTo : {
                type: Date,
                default: null
            },
            disabledFrom : {
                type: Date,
                default: null
            },
            onlyMonth : {
                type: Boolean,
                default: false
            },
            lastDateYn : {
                type: Boolean,
                default: false
            }
        },
        data:  function () {
            return {
                dateTimeValue : this.value,
                dateValue : {
                    yyyy: this.value.getFullYear(),
                    MM: (this.value.getMonth() + 1),
                    dd: this.value.getDate()
                },
                timeValue : {
                    HH: this.value.getHours(),
                    mm: this.value.getMinutes(),
                    ss: this.value.getSeconds()
                },
                muteWatchValue : false,
                muteWatchDetailValue : false
            }
        },
        created : function () {
            if (this.timeValue == null || this.timeValue == 'undefined') {
                this.timeValue = {
                    HH : this.dateFormatter(0),
                    mm: this.dateFormatter(0),
                    ss: this.dateFormatter(0)
                }
            }
        },
        watch: {
            'dateValue': 'changedDateTimeValues',
            'timeValue' : 'changedDateTimeValues',
            'value' : 'readValues'
        },
        methods: {
            changedDateTimeValues : function () {
                if (!this.value || this.muteWatchValue) { return }

                this.muteWatchDetailValue = true;

                this.dateTimeValue = new Date(this.dateValue.yyyy, (this.dateValue.MM - 1), this.dateValue.dd, this.timeValue.HH, this.timeValue.mm, this.timeValue.ss, 0);
                this.$emit('input', this.dateTimeValue)

                var self = this;
                this.$nextTick(function() {
                    return self.muteWatchDetailValue = false;
                })
            },
            readValues: function() {
                if (!this.dateValue || !this.timeValue || this.muteWatchDetailValue) { return }

                this.muteWatchValue = true;

                this.dateValue = {
                    yyyy : this.value.getFullYear(),
                    MM : this.value.getMonth() + 1,
                    dd : this.value.getDate()
                };

                this.timeValue = {
                    HH : this.dateFormatter(this.value.getHours()),
                    mm : this.dateFormatter(this.value.getMinutes()),
                    ss : this.dateFormatter(this.value.getSeconds())
                };

                this.muteWatchValue = false;
            },
            dateFormatter: function (date) {
                return ('0' + date).slice(-2);
            },
        },
        computed: {
            getDateFormat: function() {
                if (this.onlyMonth) {
                    return this.monthFormat;
                } else {
                    return this.dateFormat
                }
            }
        },
        template:
        '<div class="vue-date-time-picker-template" style="display:inline">'+
        '<vue-calendar '+
        ':placeholder="placeholder" '+
        ':pane="pane" '+
        ':clear-button="clearButton" '+
        ':has-input="hasDateInput" '+
        ':format="getDateFormat" '+
        ':on-day-click="onDayClick" '+
        ':width="dateInputWidth" '+
        ':height="height" '+
        ':disabled-to="disabledTo" '+
        ':disabled-from="disabledFrom" '+
        ':only-month="onlyMonth" '+
        ':last-date-yn="lastDateYn" '+
        'v-model="dateValue">'+
        '</vue-calendar>'+
        ' '+
        '<vue-timepicker '+
        ':format="timeFormat" '+
        ':hideClearButton="hideClearButton" '+
        ':minuteInterval="minuteInterval" '+
        ':secondInterval="secondInterval" '+
        ':minuteSelectStartValue="minuteSelectStartValue" '+
        ':secondSelectStartValue="secondSelectStartValue" '+
        ':width="timeInputWidth" '+
        'v-model="timeValue" '+
        ':height="height" '+
        ':disabled-to="disabledTo" '+
        ':disabled-from="disabledFrom" '+
        'v-show="hasTimeInput">'+
        '</vue-timepicker>'+
        '</div>'
    })


// <!--datepicker -->
var CONFIG = {
    HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
    MINUTE_TOKENS: ['mm', 'm'],
    SECOND_TOKENS: ['ss', 's'],
    APM_TOKENS: ['A', 'a']
}


Vue.component('vue-calendar', {
    template: '#vue-calendar-template',
    props: {
        value: {
            type: Object
        },
        format: {
            default: 'yyyy-MM-dd'
        },
        height: {
            type: String,
            default: '20px'
        },
        width: {
            type: String,
            default: '200px'
        },
        clearButton: {
            type: Boolean,
            default: false
        },
        lang: {
            type: String,
            default: navigator.language
        },
        placeholder: {
            type: String
        },
        hasInput: {
            type: Boolean,
            default: true
        },
        pane: {
            type: Number,
            default: 1
        },
        borderWidth: {
            type: Number,
            default: 2
        },
        onDayClick: {
            type: Function,
            default: function () {
            }
        },
        changePane: {
            type: Function,
            default: function () {
            }
        },
        specialDays: {
            type: Object,
            default: function () {
                return {}
            }
        },
        rangeBus: {
            type: Function,
            default: function () {
                // return new Vue()
            }
        },
        rangeStatus: {
            type: Number,
            default: 0
        },
        disabledTo : {
            type: Date,
            default: null
        },
        disabledFrom : {
            type: Date,
            default: null
        },
        onlyMonth : {
            type: Boolean,
            default: false
        },
        lastDateYn : {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        this.$emit('child-created', this)
        // this.inputValue = this.value
        // this.dateFormat = this.format
        this.currDate = this.getDateFromInput() || this.parse(new Date())
        var year = this.currDate.getFullYear()
        var month = this.currDate.getMonth()
        this.changePane(year, month, this.pane)
        if (!this.hasInput) {
            if (this.onlyMonth) {
                this.displayMonthView = true;
            } else {
                this.displayDayView = true;
            }
            this.updatePaneStyle()
        }
        if (this.rangeStatus) {
            this.eventbus = this.rangeBus()
            if (typeof this.eventbus === 'object' && !this.eventbus.$on) {
                console.warn('Calendar rangeBus doesn\'t exist')
                this.rangeStatus = 0
            }
        }
        if (this.rangeStatus === 2) {
            this._updateRangeStart = function (date) {
                this.rangeStart = date
                this.currDate = date
                this.inputValue = this.stringify(this.currDate)
            }
            this.eventbus.$on('calendar-rangestart', this._updateRangeStart)
        }
        document.addEventListener('click', this._blur)

        var self = this
        this.$nextTick(function () {
            return self.readValues()
        })
    },
    beforeDestroy: function () {
        document.removeEventListener('click', this._blur)
        if (this.rangeStatus === 2) {
            this.eventbus.$off('calendar-rangestart', this._updateRangeStart)
        }
    },
    data: function () {
        return {
            // inputValue: this.value,
            inputValue: '',
            dateFormat: this.format,
            currDate: new Date(),
            dateRange: [],
            monthRange: [],
            decadeRange: [],
            paneStyle: {
                width: ''
            },
            displayDayView: false,
            displayMonthView: false,
            displayYearView: false,
            rangeStart: false,
            rangeEnd: false,
            muteWatch: false
        }
    },
    watch: {
        currDate: function () {
            if (this.onlyMonth) {
                this.setMonthRange();
            } else {
                this.setDateRange()
            }
        },
        'value': 'readValues',
        format: function() {
            this.dateFormat = this.format;
            this.inputValue = this.stringify(this.currDate);
        },
        onlyMonth: function() {
            this.readValues();

            if (this.onlyMonth) {
                this.setMonthRange();
            } else {
                this.setDateRange()
            }
        }
    },
    computed: {
        text: function () {
            return this.translations(this.lang)
        },
        parseValue: function() {
            return new Date(this.value.yyyy, this.value.MM - 1, this.value.dd);
        }
    },
    methods: {
        handleMouseOver: function (event) {
            var target = event.target
            // this.rangeEnd = false
            if (!this.rangeStart) {
                return true
            }
            if (event.type === 'mouseout') {
                return true
            }
            while (this.$el.contains(target) && !~target.className.indexOf('day-cell')) {
                target = target.parentNode
            }
            if (~target.className.indexOf('day-cell') && !~target.className.indexOf('vue_datepicker-item-gray')) {
                var rangeEnd = target.getAttribute('data-date')
                if (this.rangeStart < this.parse(rangeEnd)) {
                    this.rangeEnd = this.parse(rangeEnd)
                }
            }
        },
        getItemClasses: function (d) {
            var clazz = []
            clazz.push(d.sclass)
            if (this.rangeStart && this.rangeEnd && d.sclass !== 'vue_datepicker-item-gray') {
                if (d.date > this.rangeStart && d.date < this.rangeEnd) {
                    clazz.push('daytoday-range')
                }
                /* eslint-disable eqeqeq */
                if (this.stringify(d.date) == this.stringify(this.rangeStart)) {
                    clazz.push('daytoday-start')
                }
                /* eslint-disable eqeqeq */
                if (this.stringify(d.date) == this.stringify(this.rangeEnd)) {
                    clazz.push('daytoday-end')
                }
            }
            return clazz.join(' ')
        },
        translations: function (lang) {
            lang = lang || 'en'
            var text = {
                daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                limit: 'Limit reached ({{limit}} items max).',
                loading: 'Loading...',
                minLength: 'Min. Length',
                months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                notSelected: 'Nothing Selected',
                required: 'Required',
                search: 'Search'
            }
            return window.VueCalendarLang ? window.VueCalendarLang(lang) : text
        },
        close: function () {
            this.displayDayView = this.displayMonthView = this.displayYearView = false
        },
        inputClick: function () {
            this.currDate = this.getDateFromInput() || this.parse(new Date());

            if (this.onlyMonth) {
                this.displayMonthView = true;
            } else {
                this.displayDayView = true;
            }

//                if (this.displayMonthView || this.displayYearView) {
//                    this.displayDayView = false
//                } else {
//                    this.displayDayView = !this.displayDayView
//                }
            this.updatePaneStyle()
        },
        updatePaneStyle: function () {
            if (!(this.displayMonthView || this.displayYearView)) {
                this.$nextTick(function () {
                    var offsetLeft = this.$el.offsetLeft
                    var offsetWidth = this.$el.querySelector('.vue_datepicker-inner').offsetWidth
                    var popWidth = this.pane * offsetWidth + this.borderWidth // add border
                    this.paneStyle.width = popWidth + 'px'
                    if (this.hasInput) {
                        if (popWidth + offsetLeft > document.documentElement.clientWidth) {
                            this.paneStyle.right = '0px'
                        }
                    } else {
                        this.paneStyle.position = 'initial'
                    }
                    this.$forceUpdate()
                })
            }
        },
        preNextDecadeClick: function (flag) {
            var year = this.currDate.getFullYear()
            var months = this.currDate.getMonth()
            var date = this.currDate.getDate()
            if (flag === 0) {
                this.currDate = new Date(year - 10, months, date)
            } else {
                this.currDate = new Date(year + 10, months, date)
            }
        },
        preNextMonthClick: function (flag) {
            var year = this.currDate.getFullYear()
            var month = this.currDate.getMonth()
            var date = this.currDate.getDate()
            if (flag === 0) {
                var preMonth = this.getYearMonth(year, month - 1)
                this.currDate = new Date(preMonth.year, preMonth.month, date)
                this.changePane(preMonth.year, preMonth.month, this.pane)
            } else {
                var nextMonth = this.getYearMonth(year, month + 1)
                this.currDate = new Date(nextMonth.year, nextMonth.month, date)
                this.changePane(nextMonth.year, nextMonth.month, this.pane)
            }
        },
        preNextYearClick: function (flag) {
            var year = this.currDate.getFullYear()
            var months = this.currDate.getMonth()
            var date = this.currDate.getDate()
            if (flag === 0) {
                this.currDate = new Date(year - 1, months, date)
            } else {
                this.currDate = new Date(year + 1, months, date)
            }
        },
        yearSelect: function (year) {
            this.displayYearView = false
            this.displayMonthView = true
            this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())
        },
        daySelect: function (date, event) {
            if (this.hasInput) {
                this.currDate = date
                this.inputValue = this.stringify(this.currDate)
                this.displayDayView = false
                if (this.rangeStatus === 1) {
                    this.eventbus.$emit('calendar-rangestart', this.currDate)
                }
                this.onDayClick(date, this.yyyymmddStringify(date))
            } else {
                this.onDayClick(date, this.yyyymmddStringify(date))
            }

            this.muteWatch = true;

            this.fillValues(date);

            this.muteWatch = false;
        },
        switchMonthView: function () {
            this.displayDayView = false
            this.displayMonthView = true

            this.setMonthRange();
        },
        switchDecadeView: function () {
            this.displayMonthView = false
            this.displayYearView = true
        },
        monthSelect: function (year, index) {
            if (this.onlyMonth) {
                this.displayMonthView = false;

                if (this.lastDateYn) {
                    this.currDate = new Date(year, index + 1, 0, this.currDate.getHours(), this.currDate.getMinutes(), this.currDate.getSeconds());
                } else {
                    this.currDate = new Date(year, index, this.currDate.getDate(), this.currDate.getHours(), this.currDate.getMinutes(), this.currDate.getSeconds());
                }

                if (this.hasInput) {
                    this.inputValue = this.stringify(this.currDate)
                    this.displayDayView = false
                    if (this.rangeStatus === 1) {
                        this.eventbus.$emit('calendar-rangestart', this.currDate)
                    }
                    this.onDayClick(this.currDate, this.yyyymmddStringify(this.currDate))
                } else {
                    this.onDayClick(this.currDate, this.yyyymmddStringify(this.currDate))
                }

                this.muteWatch = true;

                this.fillValues(this.currDate);

                this.muteWatch = false;

            } else {
                this.displayMonthView = false
                this.displayDayView = true
                this.currDate = new Date(year, index, this.currDate.getDate());

                this.changePane(year, index, this.pane);
            }
        },
        getYearMonth: function (year, month) {
            if (month > 11) {
                year++
                month = 0
            } else if (month < 0) {
                year--
                month = 11
            }
            return {year: year, month: month}
        },
        getSpecailDay: function (v) {
            return this.specialDays[this.stringify(v)]
        },
        stringifyDecadeHeader: function (date, pan) {
            var yearStr = date.getFullYear().toString()
            var firstYearOfDecade = parseInt(yearStr.substring(0, yearStr.length - 1) + 0, 10) + (pan * 10)
            var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
            return firstYearOfDecade + '-' + lastYearOfDecade
        },
        siblingsMonth: function (v, n) {
            return new Date(v.getFullYear(), v.getMonth() * 1 + n)
        },
        stringifyDayHeader: function (date, month) {
            month = typeof month !== 'undefined' ? month : 0;
            var d = this.siblingsMonth(date, month)
            return d.getFullYear() + '. ' + this.text.months[d.getMonth()];
        },
        parseMonth: function (date) {
            return this.text.months[date.getMonth()]
        },
        stringifyYearHeader: function (date, year) {
            year = typeof year !== 'undefined' ? year : 0;
            return date.getFullYear() + year
        },
        stringify: function (date, format) {
            format = typeof format !== 'undefined' ? format : this.dateFormat;
            if (!date) date = this.parse()
            if (!date) return ''
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var day = date.getDate()
            var monthName = this.parseMonth(date)
            return format
                .replace(/yyyy/g, year)
                .replace(/MMMM/g, monthName)
                .replace(/MMM/g, monthName.substring(0, 3))
                .replace(/MM/g, ('0' + month).slice(-2))
                .replace(/dd/g, ('0' + day).slice(-2))
                .replace(/yy/g, year)
                .replace(/M(?!a)/g, month)
                .replace(/d/g, day)
        },
        yyyymmddStringify: function (date) {
            if (!date) date = this.parse()
            if (!date) return ''
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var day = date.getDate()
            var monthName = this.parseMonth(date)
            return year + ('0' + month).slice(-2) + ('0' + day).slice(-2);
        },
        parse: function (str) {
            str = typeof str !== 'undefined' ? str : this.inputValue;
            var date
            if (str.length === 10 && (this.dateFormat === 'dd-MM-yyyy' || this.dateFormat === 'dd/MM/yyyy')) {
                date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2))
            } else {
                date = new Date(str)
                date.setHours(0, 0, 0)
            }
            return isNaN(date.getFullYear()) ? new Date() : date
        },
        getDayCount: function (year, month) {
            var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            if (month === 1) {
                if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
                    return 29
                }
            }
            return dict[month]
        },
        setDateRange: function () {
            this.dateRange = []
            this.decadeRange = []
            for (var p = 0; p < this.pane; p++) {
                var currMonth = this.siblingsMonth(this.currDate, p)
                var time = {
                    year: currMonth.getFullYear(),
                    month: currMonth.getMonth()
                }
                var yearStr = time.year.toString()
                this.decadeRange[p] = []
                var firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1
                for (var i = 0; i < 12; i++) {
                    this.decadeRange[p].push({
                        text: firstYearOfDecade + i + p * 10
                    })
                }
                this.dateRange[p] = []
                var currMonthFirstDay = new Date(time.year, time.month, 1)
                var firstDayWeek = currMonthFirstDay.getDay() + 1
                if (firstDayWeek === 0) {
                    firstDayWeek = 7
                }
                var dayCount = this.getDayCount(time.year, time.month)
                if (firstDayWeek > 1) {
                    var preMonth = this.getYearMonth(time.year, time.month - 1)
                    var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
                    for (var i = 1; i < firstDayWeek; i++) {
                        var dayText = prevMonthDayCount - firstDayWeek + i + 1;
                        var newDate = new Date(preMonth.year, preMonth.month, dayText);
                        var sclass;

                        if ((this.disabledTo != null && newDate <= this.disabledTo)
                            || (this.disabledFrom != null && newDate >= this.disabledFrom)) {
                            sclass = 'vue_datepicker-item-disable';
                        } else {
                            sclass = 'vue_datepicker-item-gray';
                        }

                        this.dateRange[p].push({
                            text: dayText,
                            date: newDate,
                            sclass: sclass
                        })
                    }
                }
                for (var i = 1; i <= dayCount; i++) {
                    var date = new Date(time.year, time.month, i)
                    var week = date.getDay()
                    var sclass = ''
                    if ((this.disabledTo != null && date <= this.disabledTo)
                        || (this.disabledFrom != null && date >= this.disabledFrom)) {
                        sclass = 'vue_datepicker-item-disable';
                    } else if (i === this.currDate.getDate()) {
                        if (this.inputValue) {
                            var valueDate = this.getDateFromInput()
                            if (valueDate) {
                                if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                                    sclass = 'vue_datepicker-dateRange-item-active'
                                }
                            }
                        }
                    } else {
                        sclass = 'vue_datepicker-item-normal';
                    }

                    this.dateRange[p].push({
                        text: i,
                        date: date,
                        sclass: sclass
                    })
                }
                if (this.dateRange[p].length < 42) {
                    var nextMonthNeed = 42 - this.dateRange[p].length
                    var nextMonth = this.getYearMonth(time.year, time.month + 1)
                    for (var i = 1; i <= nextMonthNeed; i++) {
                        var newDate = new Date(nextMonth.year, nextMonth.month, i);
                        var sClass;

                        if ((this.disabledTo != null && newDate <= this.disabledTo)
                            || (this.disabledFrom != null && newDate >= this.disabledFrom)) {
                            sClass = 'vue_datepicker-item-disable';
                        } else {
                            sClass = 'vue_datepicker-item-gray';
                        }

                        this.dateRange[p].push({
                            text: i,
                            date: newDate,
                            sclass: sClass
                        })
                    }
                }
            }
        },
        setMonthRange: function () {
            this.monthRange = [];
            var disabledToMonth = new Date(this.disabledTo.getFullYear(), this.disabledTo.getMonth());
            var disabledFromMonth = new Date(this.disabledFrom.getFullYear(), this.disabledFrom.getMonth());

            for (var i = 0; i < 12; i++) {
                var newDate = new Date(this.currDate.getFullYear(), i);
                if (i == this.parseValue.getMonth() && this.currDate.getFullYear() == this.parseValue.getFullYear()) {
                    // selected
                    this.monthRange.push(
                        {
                            text : this.text.months[i],
                            date: newDate,
                            class : 'vue_datepicker-dateRange-item-active'
                        }

                    );
                } else if ((this.disabledTo != null && newDate <= disabledToMonth)
                    || (this.disabledFrom != null && newDate >= disabledFromMonth)) {
                    // disable
                    this.monthRange.push(
                        {
                            text : this.text.months[i],
                            date: newDate,
                            class : 'vue_datepicker-month-item-disable'
                        }

                    );
                } else {
                    // normal
                    this.monthRange.push(
                        {
                            text : this.text.months[i],
                            date: newDate,
                            class : ''
                        }

                    );
                }

            }

        },
        readValues: function () {
            if (!this.value || this.muteWatch) {
                return
            }

            this.inputValue = this.stringify(new Date(this.value.yyyy, this.value.MM - 1, this.value.dd));
        },

        fillValues: function (date) {
            this.$emit('input',
                {
                    yyyy: date.getFullYear(),
                    MM: date.getMonth() + 1,
                    dd: date.getDate()
                });

            // this.$emit('input', date);
        },

        dateFormatter: function (date) {
            return ('0' + date).slice(-2);
        },

        getDateFromInput : function () {
            return new Date(this.value.yyyy, this.value.MM - 1, this.value.dd)
        }
    },
    template:
        '<span class="vue-calendar-template vue_datepicker">'+
            '<template v-if="hasInput">'+
                '<input class="form-control vue_datepicker-input" :class="{\'with-reset-button\': clearButton}" type="text" :placeholder="placeholder" '+
                ':style="{width:width,height:height}" '+
                '@click="inputClick" '+
                'v-model="inputValue" readonly/>'+
                '<button v-if="clearButton && value" type="button" class="close" @click="inputValue = \'\'">'+
                    '<span>&times;</span>'+
                '</button>'+
            '</template>'+
            '<div class="vue_datepicker_overlay" v-show="displayDayView" @click="close"></div>'+
            '<div class="vue_datepicker-popup" :style="paneStyle" @mouseover="handleMouseOver" @mouseout="handleMouseOver" v-show="displayDayView">'+
                '<template v-for="(p, pan) in pane" >'+
                    '<div class="vue_datepicker-ctrl">'+
                        '<span class="vue_datepicker-preBtn glyphicon glyphicon-backward" aria-hidden="true" @click="preNextYearClick(0)"></span>'+
                        '<span class="vue_datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>'+
                        '<p @click="switchMonthView" style="width: 110px">{{stringifyDayHeader(currDate, pan)}}</p>'+
                        '<span class="vue_datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></span>'+
                        '<span class="vue_datepicker-nextBtn glyphicon glyphicon-forward" aria-hidden="true" @click="preNextYearClick(1)"></span>'+
                    '</div>'+
                    '<div class="vue_datepicker-inner">'+
                        '<div class="vue_datepicker-body">'+
                            '<div class="vue_datepicker-weekRange">'+
                            '<span v-for="w in text.daysOfWeek">{{w}}</span>'+
                            '</div>'+
                            '<div class="vue_datepicker-dateRange" v-for="d in dateRange[pan]" id="dateItem">'+
                                '<span class="day-cell" :class="getItemClasses(d)" :data-date="stringify(d.date)" :style="{cursor: \'default\'}" v-if="d.sclass == \'vue_datepicker-item-disable\'">'+
                                    '<div>'+
                                        '{{d.text}}'+
                                    '</div>'+
                                '</span>'+
                                '<span class="day-cell" :class="getItemClasses(d)" :data-date="stringify(d.date)" @click="daySelect(d.date, $event)" v-if="d.sclass == \'vue_datepicker-item-gray\'">'+
                                    '<div>'+
                                        '{{d.text}}'+
                                    '</div>'+
                                '</span>'+
                                '<span class="day-cell" :class="getItemClasses(d)" :data-date="stringify(d.date)" @click="daySelect(d.date, $event)" v-if="d.sclass !== \'vue_datepicker-item-disable\' && d.sclass !== \'vue_datepicker-item-gray\'">'+
                                    '<div>'+
                                        '{{getSpecailDay(d.date) || d.text}}'+
                                    '</div>'+
                                '</span>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</template>'+
            '</div>'+
            '<div class="vue_datepicker_overlay" v-show="displayMonthView" @click="close"></div>'+
            '<div class="vue_datepicker-popup" :style="paneStyle" v-show="displayMonthView">'+
                '<template v-for="(p, pan) in pane" >'+
                    '<div class="vue_datepicker-ctrl">'+
                        '<span class="vue_datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextYearClick(0)"></span>'+
                        '<p @click="switchDecadeView">{{stringifyYearHeader(currDate, pan)}}</p>'+
                        '<span class="vue_datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextYearClick(1)"></span>'+
                    '</div>'+
                    '<div class="vue_datepicker-inner">'+
                        '<div class="vue_datepicker-body">'+
                            '<div class="vue_datepicker-monthRange">'+
                                '<template v-for="(m, $index) in monthRange">'+
                                    '<span v-if="m.class != \'vue_datepicker-month-item-disable\'" :class="m.class" @click="monthSelect(stringifyYearHeader(currDate, pan), $index)" >'+
                                        '{{m.text}}'+
                                    '</span>'+
                                    '<span v-if="m.class == \'vue_datepicker-month-item-disable\'" :class="m.class" :style="{cursor: \'default\'}" >'+
                                        '{{m.text}}'+
                                    '</span>'+
                                '</template>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</template>'+
            '</div>'+
            '<div class="vue_datepicker_overlay" v-show="displayYearView" @click="close"></div>'+
            '<div class="vue_datepicker-popup" :style="paneStyle" v-show="displayYearView">'+
                '<template v-for="(p, pan) in pane" >'+
                    '<div class="vue_datepicker-ctrl">'+
                        '<span class="vue_datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextDecadeClick(0)"></span>'+
                        '<p>{{stringifyDecadeHeader(currDate, pan)}}</p>'+
                        '<span class="vue_datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextDecadeClick(1)"></span>'+
                    '</div>'+
                    '<div class="vue_datepicker-inner">'+
                        '<div class="vue_datepicker-body">'+
                            '<div class="vue_datepicker-monthRange decadeRange">'+
                                '<template v-for="decade in decadeRange[pan]">'+
                                    '<span :class="{\'vue_datepicker-dateRange-item-active\': parse(inputValue).getFullYear() === decade.text}" @click.stop="yearSelect(decade.text)">'+
                                        '{{decade.text}}'+
                                    '</span>'+
                                '</template>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</template>'+
            '</div>'+
        '</span>'

})



// timepicker
    Vue.component('vue-timepicker', {
        template: '#time-picker',

        props: {
            id: '',
            width: {
                type: String,
                default: '120px'
            },
            height: {
                type: String,
                default: '20px'
            },
            value: {type: Object},
            hideClearButton: {type: Boolean},
            format: {type: String},
            minuteInterval: {type: Number},
            secondInterval: {type: Number},
            minuteSelectStartValue: {type: Number, default: 0},
            secondSelectStartValue: {type: Number, default: 0}
        },

        data: function () {
            return {
                hours: [],
                minutes: [],
                seconds: [],
                apms: [],
                showDropdown: false,
                muteWatch: false,
                hourType: 'HH',
                minuteType: 'mm',
                secondType: '',
                apmType: '',
                hour: '',
                minute: '',
                second: '',
                apm: '',
                fullValues: undefined
            }
        },

        computed: {
            displayTime: function () {
                var formatString = String((this.format || 'HH:mm'))
                if (this.hour !== 'undefined') {
                    formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour)
                }
                if (this.minute !== 'undefined') {
                    formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute)
                }
                if (this.second !== 'undefined' && this.secondType !== 'undefined') {
                    formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second)
                }
                if (this.apm !== 'undefined' && this.apmType !== 'undefined') {
                    formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm)
                }
                return formatString
            },
            showClearBtn: function () {
                if ((this.hour && this.hour !== '') || (this.minute && this.minute !== '')) {
                    return true
                }
                return false
            }
        },

        watch: {
            'format': 'renderFormat',
            minuteInterval: function (newInteval) {
                this.renderList('minute', newInteval)
            },
            secondInterval: function (newInteval) {
                this.renderList('second', newInteval)
            },
            'value': 'readValues',
            'displayTime': 'fillValues'
        },

        methods: {
            formatValue: function (type, i) {
                switch (type) {
                    case 'H':
                    case 'm':
                    case 's':
                        return String(i)
                    case 'HH':
                    case 'mm':
                    case 'ss':
                        return ('0' + String(i)).slice(-2)
                    case 'h':
                    case 'k':
                        return String(i + 1)
                    case 'hh':
                    case 'kk':
                        return ('0' + String(i + 1)).slice(-2)
                    default:
                        return ''
                }
            },

            checkAcceptingType: function (validValues, formatString, fallbackValue) {
                if (!validValues || !formatString || !formatString.length) {
                    return ''
                }
                for (var i = 0; i < validValues.length; i++) {
                    if (formatString.indexOf(validValues[i]) > -1) {
                        return validValues[i]
                    }
                }
                return fallbackValue || ''
            },

            renderFormat: function (newFormat) {
                newFormat = newFormat || this.format
                if (!newFormat || !newFormat.length) {
                    newFormat = 'HH:mm'
                }

                this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH')
                this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm')
                this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat)
                this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat)

                this.renderHoursList()
                this.renderList('minute')

                if (this.secondType) {
                    this.renderList('second')
                }

                if (this.apmType) {
                    this.renderApmList()
                }

                var self = this
                this.$nextTick(function () {
                    return self.readValues()
                })
            },

            renderHoursList: function () {
                var hoursCount = (this.hourType === 'h' || this.hourType === 'hh') ? 12 : 24
                this.hours = []
                for (var i = 0; i < hoursCount; i++) {
                    this.hours.push(this.formatValue(this.hourType, i))
                }
            },

            renderList: function (listType, interval) {
                startValue = 0;
                if (listType === 'second') {
                    interval = interval || this.secondInterval
                    startValue = this.secondSelectStartValue
                } else if (listType === 'minute') {
                    interval = interval || this.minuteInterval
                    startValue = this.minuteSelectStartValue
                } else {
                    return
                }

                if (interval === 0) {
                    interval = 60
                } else if (interval > 60) {
                    window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval)
                    interval = 1
                } else if (interval < 1) {
                    window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval)
                    interval = 1
                } else if (!interval) {
                    interval = 1
                }

                if (listType === 'minute') {
                    this.minutes = []
                } else {
                    this.seconds = []
                }

                for (var i = startValue; i < 60; i += interval) {
                    if (listType === 'minute') {
                        this.minutes.push(this.formatValue(this.minuteType, i))
                    } else {
                        this.seconds.push(this.formatValue(this.secondType, i))
                    }
                }
            },

            renderApmList: function () {
                this.apms = []
                if (!this.apmType) {
                    return
                }
                this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm']
            },

            readValues: function () {
                if (!this.value || this.muteWatch) {
                    return
                }

                var timeValue = JSON.parse(JSON.stringify(this.value || {}))

                var values = Object.keys(timeValue)
                if (values.length === 0) {
                    return
                }

                if (values.indexOf(this.hourType) > -1) {
                    this.hour = timeValue[this.hourType]
                }

                if (values.indexOf(this.minuteType) > -1) {
                    this.minute = timeValue[this.minuteType]
                }

                if (values.indexOf(this.secondType) > -1) {
                    this.second = timeValue[this.secondType]
                } else {
                    this.second = 0
                }

                if (values.indexOf(this.apmType) > -1) {
                    this.apm = timeValue[this.apmType]
                }

                this.fillValues()
            },

            fillValues: function () {
                var fullValues = {}

                var baseHour = this.hour
                var baseHourType = this.hourType

                var hourValue = baseHour || baseHour === 0 ? Number(baseHour) : ''
                var baseOnTwelveHours = this.isTwelveHours(baseHourType)
                var apmValue = (baseOnTwelveHours && this.apm) ? String(this.apm).toLowerCase() : false

                CONFIG.HOUR_TOKENS.forEach(function (token) {
                    if (token === baseHourType) {
                        fullValues[token] = baseHour
                        return
                    }

                    var value
                    var apm
                    switch (token) {
                        case 'H':
                        case 'HH':
                            if (!String(hourValue).length) {
                                fullValues[token] = ''
                                return
                            } else if (baseOnTwelveHours) {
                                if (apmValue === 'pm') {
                                    value = hourValue < 12 ? hourValue + 12 : hourValue
                                } else {
                                    value = hourValue % 12
                                }
                            } else {
                                value = hourValue % 24
                            }
                            fullValues[token] = (token === 'HH') ? ('0' + String(value)).slice(-2) : String(value)
                            break
                        case 'k':
                        case 'kk':
                            if (!String(hourValue).length) {
                                fullValues[token] = ''
                                return
                            } else if (baseOnTwelveHours) {
                                if (apmValue === 'pm') {
                                    value = hourValue < 12 ? hourValue + 12 : hourValue
                                } else {
                                    value = hourValue === 12 ? 24 : hourValue
                                }
                            } else {
                                value = hourValue === 0 ? 24 : hourValue
                            }
                            fullValues[token] = (token === 'kk') ? ('0' + String(value)).slice(-2) : String(value)
                            break
                        case 'h':
                        case 'hh':
                            if (apmValue) {
                                value = hourValue
                                apm = apmValue || 'am'
                            } else {
                                if (!String(hourValue).length) {
                                    fullValues[token] = ''
                                    fullValues.a = ''
                                    fullValues.A = ''
                                    return
                                } else if (hourValue > 11) {
                                    apm = 'pm'
                                    value = hourValue === 12 ? 12 : hourValue % 12
                                } else {
                                    if (baseOnTwelveHours) {
                                        apm = ''
                                    } else {
                                        apm = 'am'
                                    }
                                    value = hourValue % 12 === 0 ? 12 : hourValue
                                }
                            }
                            fullValues[token] = (token === 'hh') ? ('0' + String(value)).slice(-2) : String(value)
                            fullValues.a = apm
                            fullValues.A = apm.toUpperCase()
                            break
                    }
                })

                if (this.minute || this.minute === 0) {
                    var minuteValue = Number(this.minute)
                    fullValues.m = String(minuteValue)
                    fullValues.mm = ('0' + String(minuteValue)).slice(-2)
                } else {
                    fullValues.m = ''
                    fullValues.mm = ''
                }

                if (this.second || this.second === 0) {
                    var secondValue = Number(this.second)
                    fullValues.s = String(secondValue)
                    fullValues.ss = ('0' + String(secondValue)).slice(-2)
                } else {
                    fullValues.s = ''
                    fullValues.ss = ''
                }

                this.fullValues = fullValues
                this.updateTimeValue(fullValues)
                this.$emit('change', {data: fullValues})
            },

            updateTimeValue: function (fullValues) {
                this.muteWatch = true

                var self = this

                var baseTimeValue = JSON.parse(JSON.stringify(this.value || {}))
                var timeValue = {}

                Object.keys(baseTimeValue).forEach(function (key) {
                    timeValue[key] = fullValues[key]
                })

                this.$emit('input', timeValue)

                this.$nextTick(function () {
                    return self.muteWatch = false
                })
            },

            isTwelveHours: function (token) {
                return token === 'h' || token === 'hh'
            },

            toggleDropdown: function () {
                this.showDropdown = !this.showDropdown
            },

            select: function (type, value) {
                if (type === 'hour') {
                    this.hour = value
                } else if (type === 'minute') {
                    this.minute = value
                } else if (type === 'second') {
                    this.second = value
                } else if (type === 'apm') {
                    this.apm = value
                }
            },

            clearTime: function () {
                this.hour = ''
                this.minute = ''
                this.second = ''
                this.apm = ''
            }
        },
        created: function() {
            this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, this.format, 'HH')
            this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, this.format, 'mm')
            this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, this.format)
            this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, this.format)

            var timeValue = JSON.parse(JSON.stringify(this.value || {}))

            var values = Object.keys(timeValue)
            if (values.length === 0) {
                return
            }

            if (values.indexOf(this.hourType) > -1) {
                this.hour = ('0' + timeValue[this.hourType]).slice(-2);
            }

            if (values.indexOf(this.minuteType) > -1) {
                this.minute = ('0' + timeValue[this.minuteType]).slice(-2);
            }

            if (values.indexOf(this.secondType) > -1) {
                this.second = ('0' + timeValue[this.secondType]).slice(-2);
            } else {
                this.second = 0
            }

            if (values.indexOf(this.apmType) > -1) {
                this.apm = timeValue[this.apmType]
            }
            // this.renderFormat()
        },

        mounted: function () {
            this.renderFormat()
        },
        template:
        '<span class="time-picker">'+
        '<input class="display-time" :id="id" v-model="displayTime" @click="toggleDropdown" type="text" readonly :style="{width:width,height:height}"/>'+
        '<span class="clear-btn" v-if="!hideClearButton" v-show="hideClearButton && !showDropdown && showClearBtn" @click="clearTime">&times;</span>'+
        '<div class="time-picker-overlay" v-if="showDropdown" @click="toggleDropdown"></div>'+
        '<div class="dropdown" v-show="showDropdown">'+
        '<div class="select-list">'+
        '<ul class="hours">'+
        '<li class="hint">hr</li>'+
        '<li v-for="hr in hours" v-text="hr" :class="{active: hour === hr}" @click="select(\'hour\', hr)"></li>'+
        '</ul>'+
        '<ul class="minutes">'+
        '<li class="hint">m</li>'+
        '<li v-for="m in minutes" v-text="m" :class="{active: minute === m}" @click="select(\'minute\', m)"></li>'+
        '</ul>'+
        '<ul class="seconds" v-if="secondType">'+
        '<li class="hint">s</li>'+
        '<li v-for="s in seconds" v-text="s" :class="{active: second === s}" @click="select(\'second\', s)"></li>'+
        '</ul>'+
        '<ul class="apms" v-if="apmType">'+
        '<li class="hint" v-text="apmType"></li>'+
        '<li v-for="a in apms" v-text="a" :class="{active: apm === a}" @click="select(\'apm\', a)"></li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</span>'
    })
