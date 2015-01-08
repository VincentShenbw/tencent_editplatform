var items = str[1].split("Pline");
      for (var i = 1; i < items.length; i++)
      {
        var region = items[i].split("\r\n");
        var pointsnum = parseInt(region[0]);
        var triangleCoords = new Array();
        var triangleCoords_gg = new Array();
        mifleft[number][i] = "";
        for (var j = 1; j <= pointsnum; j++)
        {
          var xys = region[j].split(" ");
          triangleCoords.push(new qq.maps.LatLng(parseFloat(xys[1]), parseFloat(xys[0])));
          triangleCoords_gg.push(new google.maps.LatLng(parseFloat(xys[1]), parseFloat(xys[0])));
        }
        for (var j = pointsnum+1; j < region.length; j++)// maybe bug
        {
          mifleft[number][i] += region[j];
          mifleft[number][i] += "\r\n";
        }
        regionItems[number].push(triangleCoords);
        regionItems_gg[number].push(triangleCoords_gg);
        //drawpolygon(triangleCoords);
      }

var items = str[1].split("Point");
      for (var i = 1; i < items.length; i++)
      {
        var region = items[i].split("\r\n");
        var pointsnum = 1;
        var triangleCoords = new Array();
        var triangleCoords_gg = new Array();
        mifleft[number][i] = "";
        for (var j = 1; j <= pointsnum; j++)
        {
          var xys = region[j].split(" ");
          triangleCoords.push(new qq.maps.LatLng(parseFloat(xys[1]), parseFloat(xys[0])));
          triangleCoords_gg.push(new google.maps.LatLng(parseFloat(xys[1]), parseFloat(xys[0])));
        }
        for (var j = pointsnum+1; j < region.length; j++)// maybe bug
        {
          mifleft[number][i] += region[j];
          mifleft[number][i] += "\r\n";
        }
        regionItems[number].push(triangleCoords);
        regionItems_gg[number].push(triangleCoords_gg);
        //drawpolygon(triangleCoords);
      } 


function mifrecon(number)
    {
      var content = "";
      content += mifleft[number][0];
      for (var i = 0; i < regionItems.length; i++)
      {
        content += "Pline";
        content += " ";
        content += regionItems[number][i].length;
        content += "\r\n";
        for (var j = 0; j < regionItems[number][i].length; j++)
        {
          content += regionItems[number][i][j].getLng();
          content += " ";
          content += regionItems[number][i][j].getLat();
          content += "\r\n";
        }
        content += mifleft[number][i+1];
      }
      return content;
    }

function mifrecon(number)
    {
      var content = "";
      content += mifleft[number][0];
      for (var i = 0; i < regionItems.length; i++)
      {
        content += "Point";
        content += " ";
        //content += regionItems[number][i].length;
        //content += "\r\n";
        for (var j = 0; j < regionItems[number][i].length; j++)
        {
          content += regionItems[number][i][j].getLng();
          content += " ";
          content += regionItems[number][i][j].getLat();
          content += "\r\n";
        }
        content += mifleft[number][i+1];
      }
      return content;
    }