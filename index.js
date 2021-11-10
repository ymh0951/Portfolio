// Text 롤링
Zepto(function($) {
    $(window).on('load', function() {
      $.each($(".ezkorry-roller"), function(index, item) {
        const wrapper = $("<div />", { class:"ezkorry-roller-wrapper"});
        const roller = $(item);
        roller.append(wrapper);
        const span = roller.find('span').first();
        wrapper.append(span);
    
        const span_width = span.get(0).offsetWidth;
        const max_width = roller.width() + span_width;
        let inner_width = span_width;
  
        while(max_width > inner_width) {
          wrapper.append(span.clone());
          inner_width += span_width;
        }
        
        anime({
          targets: wrapper.get(0),
          translateX: {
            value: '-=' + span_width + 'px',
            duration: 45000
          },
          loop: true,
          easing: 'linear'
        });
      });
    })
});
// jQuery
$(document).ready(function(){
    // Skill Section
    $(window).scroll(function(){
        var here = $("#sec3").offset().top - $('#sec3').height() / 1.5;
        var height = $(document).scrollTop();
        console.log(here);
        if(here <= height){
        $('#skill_gage_html, #skill_gage_css').css({
            width: '95%',
            color: 'white',
        });
        $('#skill_gage_photoshop').css({
            width: '90%',
            color: 'white',
        });
        $('#skill_gage_jquery, #skill_gage_js').css({
            width: '85%',
            color: 'white',
        });
        $('#skill_gage_illustrator').css({
            width: '80%',
            color: 'white',
        });
        };
    });
    // 페스룸
    $('.portfolio').eq(0).hover(function(){
        $('.portfolio>img').eq(1).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(1).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(2).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(2).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(3).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(3).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(0).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(0).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(1).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(1).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(2).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(2).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(3).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(3).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(0).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(0).css({
            transitionDelay: '0s',
        })
    });
    // 내셔널 지오 그래픽
    $('.portfolio').eq(1).hover(function(){
        $('.portfolio>img').eq(5).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(5).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(6).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(6).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(7).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(7).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(1).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(1).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(5).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(5).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(6).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(6).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(7).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(7).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(1).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(1).css({
            transitionDelay: '0s',
        })
    });
    // 에이스 침대
    $('.portfolio').eq(2).hover(function(){
        $('.portfolio>img').eq(9).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(9).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(10).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(10).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(11).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(11).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(2).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(2).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(9).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(9).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(10).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(10).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(11).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(11).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(2).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(2).css({
            transitionDelay: '0s',
        })
    });
    // 멜론
    $('.portfolio').eq(3).hover(function(){
        $('.portfolio>img').eq(13).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(13).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(14).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(14).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(15).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(15).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(3).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(3).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(13).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(13).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(14).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(14).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(15).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(15).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(3).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(3).css({
            transitionDelay: '0s',
        })
    });
    // 교보문고
    $('.portfolio').eq(4).hover(function(){
        $('.portfolio>img').eq(17).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(17).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(18).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(18).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(19).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(19).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(4).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(4).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(17).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(17).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(18).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(18).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(19).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(19).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(4).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(4).css({
            transitionDelay: '0s',
        })
    });
    // 넥슨
    $('.portfolio').eq(5).hover(function(){
        $('.portfolio>img').eq(21).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(21).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(22).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(22).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(23).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(23).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(5).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(5).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(21).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(21).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(22).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(22).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(23).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(23).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(5).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(5).css({
            transitionDelay: '0s',
        })
    });
    // 마블
    $('.portfolio').eq(6).hover(function(){
        $('.portfolio>img').eq(25).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(25).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(26).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(26).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(27).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(27).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(6).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(6).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(25).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(25).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(26).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(26).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(27).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(27).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(6).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(6).css({
            transitionDelay: '0s',
        })
    });
    // 마블
    $('.portfolio').eq(7).hover(function(){
        $('.portfolio>img').eq(29).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(29).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(30).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(30).css({
            transitionDelay: '0.3s',
        });
        $('.portfolio>img').eq(31).animate({
            left: 0,
        }, 100);
        $('.portfolio>img').eq(31).css({
            transitionDelay: '0.6s',
        });
        $('.portfolio_text').eq(7).animate({
            left: 0,
        }, 100)
        $('.portfolio_text').eq(7).css({
            transitionDelay: '0.9s',
        })
    }, function(){
        $('.portfolio>img').eq(29).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(29).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(30).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(30).css({
            transitionDelay: '0s',
        });
        $('.portfolio>img').eq(31).animate({
            left: '100%',
        }, 100);
        $('.portfolio>img').eq(31).css({
            transitionDelay: '0s',
        });
        $('.portfolio_text').eq(7).animate({
            left: '100%',
        }, 100)
        $('.portfolio_text').eq(7).css({
            transitionDelay: '0s',
        })
    });
}); // end