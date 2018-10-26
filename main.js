$(document).ready(function() {
    var playing = false;
    var circleId = 0;
    var activeCircles = [];
    var difficulty = 0.5;

    // Initialize vibration
    var canVibrate = "vibrate" in navigator || "mozVibrate" in navigator;
    if (canVibrate && !("vibrate" in navigator))
    navigator.vibrate = navigator.mozVibrate;

    
    // iPhone clicks
    var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

    svg = d3.select("svg");
  
    playButton = d3.select("#playButton")
    playButtonSurface= d3.select("#playButtonSurface")
        .on("click",function(){
            playButtonClick();
            })

    $("#playButtonText").on("click",function(){
        playButtonClick();
    })

    function playButtonClick() {
        $("#score").text(0);
        $("#playButtonText").hide();
        $("#instructions").hide();
        playButtonSurface.style("display", "none");
        playButton
            .transition()
            .duration(750)
            .attr("r", 10000)
        playing = true;
    }

    function drawCircle() {
        if (playing) {
            if((Math.random()*100) < (20 + parseInt($("#score").text())) & activeCircles.length < 5){
                circleId++;
                currentCircle = svg.append("circle")
                    .classed("expandingCircle", true)
                    .attr("cx", Math.floor(Math.random() * (90 - 10) ) + 10 + "%")
                    .attr("cy", Math.floor(Math.random() * (90 - 20) ) + 20 + "%")
                    .attr("r", "1")
                    .attr("id", "p"+circleId)
                    .style("fill", "white")
                    .style("opacity", "0.6")
                    .transition()
                        .duration(1000)
                        .attr("r", 50)
                    .transition()
                        .duration(2000)
                        .attr("r", 0)
                    
                    $("#p"+circleId).bind(clickHandler, function(e) {
                        navigator.vibrate(10);
                        $(this).attr('clicked', true);
                        $("#score").text(parseInt($("#score").text()) + 1)
                        d3.select(this).remove();
                        var index = activeCircles.indexOf("#"+this.id);
                        activeCircles.splice(index, 1);
                    });
                    // $("#p"+circleId).on("click",function(){
                    //     navigator.vibrate(10);
                    //     $(this).attr('clicked', true);
                    //     $("#score").text(parseInt($("#score").text()) + 1)
                    //     d3.select(this).remove();
                    //     var index = activeCircles.indexOf("#"+this.id);
                    //     activeCircles.splice(index, 1);
                    // })
                activeCircles.push("#p"+circleId)
            }
        }
    }

    function gameOver() {
        navigator.vibrate(500);
        console.log("gameover")
        playing = false;
        d3.selectAll(".expandingCircle").remove();

        svg.append("circle")
            .attr("cx", "50%")
            .attr("cy", "50%")
            .attr("r", "10000")
            .style("fill", "red")
            .style("opacity", "0.25")
            .transition()
                .duration(500)
                .on("end", function() {
                    d3.select(this).remove()
                })
                        
        playButton
            .transition()
            .duration(750)
            .attr("r", 50)
            .on("end", function() {
                playButtonSurface.style("display", "block")
                $("#playButtonText").show();
                $("#instructions").show();
            })
        activeCircles = [];
        
        
    }

    function checkIfGameOver() {
        for(var d of activeCircles) {
            c = d3.select(d);
            if(c.attr("r") == 0) {
                gameOver()
                break;
            }
        }
    }
    
    setInterval(drawCircle, 150);
    setInterval(checkIfGameOver, 50);
})