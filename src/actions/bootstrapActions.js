
import React, { Component } from 'react';
import BootstrapNavBar from '../components/bootstrap/bootstrapNavBar';
import BootstrapButton from '../components/bootstrap/bootstrapButton';
import BootstrapGlyphicons from '../components/bootstrap/BootstrapGlyphicons';
import BootstrapImage from '../components/bootstrap/BootstrapImage';
import BootstrapLabels from '../components/bootstrap/BootstrapLabels';
import BootstrapListGroup from '../components/bootstrap/BootstrapListGroup';
import BootstrapPageHeader from '../components/bootstrap/BootstrapPageHeader';
import BootstrapPager from '../components/bootstrap/bootstrapPager';
import BootstrapPagination from '../components/bootstrap/bootstrapPagination';
import BootstrapPanel from '../components/bootstrap/bootstrapPanel';
import BootstrapTables from '../components/bootstrap/BootstrapTables';
import BootstrapThumbnail from '../components/bootstrap/BootstrapThumbnail';
import BootstrapBreadcrumbs from '../components/bootstrap/bootstrapBreadcrumbs';
import BootstrapJumbotron from '../components/bootstrap/BootstrapJumbotron';

export function addBootstrapNavBar(){
  return{
    type: "ADD_BOOTSTRAP_NAVBAR",
    data:{
      component: <BootstrapNavBar />,
    }
  }
}
export function removeBootstrapNavBar(){
  return {
    type: "REMOVE_BOOTSTRAP_NAVBAR",
    data:{
        component: null,
    }
  }
}
export function addBootstrapButton(){
  return{
    type: "ADD_BOOTSTRAP_BUTTON",
    data:{
      component: <BootstrapButton />,
    }
  }
}
export function removeBootstrapButton(){
  return{
    type: "REMOVE_BOOTSTRAP_BUTTON",
    data:{
      component: null,
    }
  }
}
export function addBootstrapBreadcrumbs(){
  return{
    type: "ADD_BOOTSTRAP_BREADCRUMBS",
    data:{
      component: <BootstrapBreadcrumbs />,
    }
  }
}
export function removeBootstrapBreadcrumbs(){
  return{
    type: "REMOVE_BOOTSTRAP_BREADCRUMBS",
    data:{
      component: null,
    }
  }
}
export function addBootstrapGlyphicons(){
  return{
    type: "ADD_BOOTSTRAP_GLYPHICONS",
    data:{
      component: <BootstrapGlyphicons />,
    }
  }
}
export function removeBootstrapGlyphicons(){
  return{
    type: "REMOVE_BOOTSTRAP_GLYPHICONS",
    data:{
      component: null,
    }
  }
}
export function addBootstrapImage(){
  return{
    type: "ADD_BOOTSTRAP_IMAGE",
    data:{
      component: <BootstrapImage />,
    }
  }
}
export function removeBootstrapImage(){
  return{
    type: "REMOVE_BOOTSTRAP_IMAGE",
    data:{
      component: null,
    }
  }
}
export function addBootstrapJumbotron(){
  return{
    type: "ADD_BOOTSTRAP_JUMBOTRON",
    data:{
      component: <BootstrapJumbotron />,
    }
  }
}
export function removeBootstrapJumbotron(){
  return{
    type: "REMOVE_BOOTSTRAP_JUMBOTRON",
    data:{
      component: null,
    }
  }
}
export function addBootstrapLabels(){
  return{
    type: "ADD_BOOTSTRAP_LABELS",
    data:{
      component: <BootstrapLabels />,
    }
  }
}
export function removeBootstrapLabels(){
  return{
    type: "REMOVE_BOOTSTRAP_LABELS",
    data:{
      component: null,
    }
  }
}
export function addBootstrapListGroup(){
  return{
    type: "ADD_BOOTSTRAP_LISTGROUP",
    data:{
      component: <BootstrapListGroup />,
    }
  }
}
export function removeBootstrapListGroup(){
  return{
    type: "REMOVE_BOOTSTRAP_LISTGROUP",
    data:{
      component: null,
    }
  }
}
export function addBootstrapPageHeader(){
  return{
    type: "ADD_BOOTSTRAP_PAGEHEADER",
    data:{
      component: <BootstrapPageHeader />,
    }
  }
}
export function removeBootstrapPageHeader(){
  return{
    type: "REMOVE_BOOTSTRAP_PAGEHEADER",
    data:{
      component: null,
    }
  }
}
export function addBootstrapPager(){
  return{
    type: "ADD_BOOTSTRAP_PAGER",
    data:{
      component: <BootstrapPager />,
    }
  }
}
export function removeBootstrapPager(){
  return{
    type: "REMOVE_BOOTSTRAP_PAGER",
    data:{
      component: null,
    }
  }
}
export function addBootstrapPagination(){
  return{
    type: "ADD_BOOTSTRAP_PAGINATION",
    data:{
      component: <BootstrapPagination />,
    }
  }
}
export function removeBootstrapPagination(){
  return{
    type: "REMOVE_BOOTSTRAP_PAGINATION",
    data:{
      component: null,
    }
  }
}
export function addBootstrapPanel(){
  return{
    type: "ADD_BOOTSTRAP_PANEL",
    data:{
      component: <BootstrapPanel />,
    }
  }
}
export function removeBootstrapPanel(){
  return{
    type: "REMOVE_BOOTSTRAP_PANEL",
    data:{
      component: null,
    }
  }
}
export function addBootstrapTables(){
  return{
    type: "ADD_BOOTSTRAP_TABLES",
    data:{
      component: <BootstrapTables />,
    }
  }
}
export function removeBootstrapTables(){
  return{
    type: "REMOVE_BOOTSTRAP_TABLES",
    data:{
      component: null,
    }
  }
}
export function addBootstrapThumbnail(){
  return{
    type: "ADD_BOOTSTRAP_Thumbnail",
    data:{
      component: <BootstrapThumbnail />,
    }
  }
}
export function removeBootstrapThumbnail(){
  return{
    type: "REMOVE_BOOTSTRAP_THUMBNAIL",
    data:{
      component: null,
    }
  }
}
