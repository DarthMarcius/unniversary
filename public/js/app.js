//alert("Get better my love");
(function(window, $) {
	$.fn.typeText = function(textString, interval, callback) {

        var stringLength = textString.length,
            counter = 0,
            oneCharInterval = interval / stringLength,
            that = this;
            /*console.log(textString);*/
        function intervalLoop($context) {
            //console.log($context)
            if(counter < stringLength) {
                setTimeout(function() {
                    /*console.log("coa")
                    console.log($context.val())
                    console.log(textString[counter])*/
                    $context.html($context.html() + textString[counter]);///$(this).val() + textString[counter]
                    counter++;

                    intervalLoop($context);
                }, oneCharInterval);
            }else {
                if(typeof callback === 'function') {
                    callback();
                }
            }

        }
        
        this.each(function(key, value) {
            intervalLoop($(value));
        });

        
        return this;
    };

    function universary() {

    }
    universary.prototype = {
    	messages: {
    		message1: "Марянка і Маркіян",
    		message2: "Рік Разом"
    	},
    	images: [
    		"img/1.jpg",
    		"img/2.jpg",
    		"img/3.jpg",
    		"img/4.jpg",
    		"img/5.jpg"
    	],
    	step: 0,
    	interval: null,
    	init: function() {
    		this.initCache();
    		this.initMessages();

    	},
    	initCache: function() {
    		this.$cache = {
    			title: $(".title"),
    			slider: $(".slider"),
    			front: $(".slider-front"),
    			back: $(".slider-back"),
    			sliderWrapper: $(".slider-wrapper")
    		};
    	},
    	initMessages: function() {
    		var that = this;
    		console.log(that.messages)
    		that.$cache.title.typeText(that.messages.message1, 2500, function() {
    			that.$cache.title.fadeOut(2000, function() {
    				that.$cache.title.html("").fadeIn();
    				that.$cache.title.typeText(that.messages.message2, 2000, function() {
		    			setTimeout(function() {
		    				that.$cache.title.fadeOut(2000, function() {
		    					that.initSlider();
		    				});
		    			}, 0);
		    		});
    			});
    			
    		});
    	},
    	initSlider: function() {
    		var that = this,
    			imagesLength = this.images.length,
    			$notActive;
    		that.$cache.slider.fadeIn();
    		if(imagesLength >= 2) {
    			if(!$(".active").length) {
    				that.$cache.front.addClass("active");
    				that.$cache.front.attr("src", this.images[this.step]);
    				that.$cache.slider.filter(":not(.active)").attr("src", this.nextStep());
    			}
    			setInterval(function() {
    				var $active = $(".active"),
    					$notActive = that.$cache.slider.filter(":not(.active)");
    				$active.attr("src", that.nextStep());
    				$active.removeClass("active");
    				that.$cache.sliderWrapper.toggleClass("turn");
    				$notActive.addClass("active");
    			}, 5000);
    		}
    	},
    	nextStep: function() {
    		imagesLength = this.images.length;
    		if(this.step < (imagesLength - 1)) {
    			this.step++;
    			return this.images[this.step];
    		}else {
    			this.step = 0;
    			return this.images[this.step];
    		}
    	}
    };
    var app = new universary();
    app.init();
})(window, $);