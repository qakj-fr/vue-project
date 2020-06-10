		//判断是否是闰年,参数是年
		//如果返回值是true，那么是闰年，如果返回值是false那么不是闰年
		function isLeapYear(year){
			return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
		}
		
		
	$(function(){
		//向页面中打印2020年的日历
		for(var m = 1;m<=12;m++){
			//单独打印一个月份的日历,比如1月份
			var dt = new Date("2020-"+m+"-1");	
			//1.选择body,向body中添加<div class="dv_month"></div>
			$("body").append('<div class="dv_month"></div>');
			//2.添加月份<div class="dv_month_num">月份</div>
			var month = dt.getMonth();
			$(".dv_month:last").append('<div class="dv_month_num">'+(month+1)+'</div>')
			//3.添加星期
			var week = ['日','一','二','三','四','五','六'];
			for(var i = 0;i<week.length;i++){
				$(".dv_month:last").append('<div class="dv_wk">'+week[i]+'</div>');
			}
			
			//4添加天数（有的是31，有的是30天，2月份可能是28或29）
			//根据月份获取天数
			var days = 31;
			switch(month+1){
				case 2:
					var year = dt.getFullYear();
					//判断是否是闰年，如果是，2月份的天数应该是29天，否则是28天
					days = isLeapYear(year)?29:28;
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					days = 30;
					break;
			}
			//为了对其周几，需要打印空格
			//把日期设置为1号，以便获取1号当日为周几(算空格)
			dt.setDate(1);
			for(var e = 0;e<dt.getDay();e++){
				$(".dv_month:last").append('<div class="dv_day_em"></div>');
			}
			
			//设置天数
			for(var day = 1;day<=days;day++){
				$(".dv_month:last").append('<div class="dv_day">'+day+'</div>');
			}
		}
	})