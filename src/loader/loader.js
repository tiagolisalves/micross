/**
 * html
 * <cross-component selector="grid-exigencias"></cross-component>
   js
 
 *  var gridExigencias = FCross.load('grid-exigencias',{
        componentUrl : '',
        stylesUrl : ''
    })

    crossApp.push({numeroDue : 'numeroDue'})
    crossApp.subscribe(function(output){
        console.log(output)
    })

 */
import { genPrefix } from "../utils";

function load(selector, loadInfo) {
  validateRequired(loadInfo);
  var script = document.createElement("script");
  script.src =
    cache === false ? `${loadInfo.url}"?q="${Math.random()}` : loadInfo.url;
  script.onload = loadInfo.onload;
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    cache === false
      ? `${loadInfo.stylesUrl}"?q="${Math.random()}`
      : loadInfo.url;
  var componentTag = document.querySelector(
    `fcross-component[selector=${selector}]`
  );
  componentTag.className = genPrefix(selector);
  document.getElementsByTagName("head")[0].appendChild(link);
  componentTag.appendChild(script);
  $element[0].appendChild(componentTag);
}

function validateRequired(loadInfo) {
  if (!loadInfo.url || !loadInfo.stylesUrl) {
    throw new Error("Required info is missing");
  }
}

export { load };
