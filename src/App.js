import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css'
import {
  addBootstrapNavBar,
  removeBootstrapNavBar,
  addBootstrapButton,
  removeBootstrapButton,
  addBootstrapBreadcrumbs,
  removeBootstrapBreadcrumbs,
  addBootstrapGlyphicons,
  removeBootstrapGlyphicons,
  addBootstrapImage,
  removeBootstrapImage,
  addBootstrapJumbotron,
  removeBootstrapJumbotron,
  addBootstrapLabels,
  removeBootstrapLabels,
  addBootstrapListGroup,
  removeBootstrapListGroup,
  addBootstrapPageHeader,
  removeBootstrapPageHeader,
  addBootstrapPager,
  removeBootstrapPager,
  addBootstrapPagination,
  removeBootstrapPagination,
  addBootstrapPanel,
  removeBootstrapPanel,
  addBootstrapTables,
  removeBootstrapTables,
  addBootstrapThumbnail,
  removeBootstrapThumbnail,


} from './actions/bootstrapActions';
import {
  addMaterializeNavBar,
  removeMaterializeNavBar,
  addMaterializeButton,
  removeMaterializeButton,
  addMaterializeBreadcrumbs,
  removeMaterializeBreadcrumbs,
  addMaterializeBadges,
  removeMaterializeBadges,
  addMaterializeCard,
  removeMaterializeCard,
  addMaterializeChips,
  removeMaterializeChips,
  addMaterializeCollections,
  removeMaterializeCollections,
  addMaterializeFooter,
  removeMaterializeFooter,
  addMaterializeForm,
  removeMaterializeForm,
  addMaterializeIcon,
  removeMaterializeIcon,
  addMaterializePagination,
  removeMaterializePagination,
  addMaterializePreloader,
  removeMaterializePreloader,

} from './actions/materializeActions';

import BootstrapButton from './components/bootstrap/bootstrapButton';
import MaterializeButton from './components/materialize/materializeButton';

import { Button, ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';


//@connect will wrap the App component and pass it the states from the redux store as props! clean code :D

@connect((store) => {
  return {
    bootstrapNavBarComponent:store.BootstrapReducers.Navbar,
    bootstrapButtonComponent:store.BootstrapReducers.Button,
    bootstrapBreadcrumbsComponent:store.BootstrapReducers.Breadcrumbs,
    bootstrapGlyphiconsComponent:store.BootstrapReducers.Glyphicons,
    bootstrapImageComponent:store.BootstrapReducers.Image,
    bootstrapJumbotronComponent:store.BootstrapReducers.Jumbotron,
    bootstrapLabelsComponent:store.BootstrapReducers.Labels,
    bootstrapListGroupComponent:store.BootstrapReducers.ListGroup,
    bootstrapPageHeaderComponent:store.BootstrapReducers.PageHeader,
    bootstrapPagerComponent:store.BootstrapReducers.Pager,
    bootstrapPaginationComponent:store.BootstrapReducers.Pagination,
    bootstrapPanelComponent:store.BootstrapReducers.Panel,
    bootstrapTablesComponent:store.BootstrapReducers.Tables,
    bootstrapThumbnailComponent:store.BootstrapReducers.Thumbnail,



    materializeButtonComponent:store.MaterializeReducers.Button,
    materializeNavBarComponent:store.MaterializeReducers.Navbar,
    materializeBadgesComponent:store.MaterializeReducers.Badges,
    materializeBreadcrumbsComponent:store.MaterializeReducers.Breadcrumbs,
    materializeCardComponent:store.MaterializeReducers.Card,
    materializeChipsComponent:store.MaterializeReducers.Chips,
    materializeCollectionsComponent:store.MaterializeReducers.Collections,
    materializeFooterComponent:store.MaterializeReducers.Footer,
    materializeFormComponent:store.MaterializeReducers.Form,
    materializeIconComponent:store.MaterializeReducers.Icon,
    materializePaginationComponent:store.MaterializeReducers.Pagination,
    materializePreloaderComponent:store.MaterializeReducers.Preloader,

  };
})


class App extends Component {

  addBootstrapNavBar(){
    this.props.dispatch(addBootstrapNavBar())
  }
  removeBootstrapNavBar(){
    this.props.dispatch(removeBootstrapNavBar())
  }
  addBootstrapButton(){
    this.props.dispatch(addBootstrapButton())
  }
  removeBootstrapButton(){
    this.props.dispatch(removeBootstrapButton())
  }
  addBootstrapBreadcrumbs(){
    this.props.dispatch(addBootstrapBreadcrumbs())
  }
  removeBootstrapBreadcrumbs(){
    this.props.dispatch(removeBootstrapBreadcrumbs())
  }
  addBootstrapGlyphicons(){
    this.props.dispatch(addBootstrapGlyphicons())
  }
  removeBootstrapGlyphicons(){
    this.props.dispatch(removeBootstrapGlyphicons())
  }
  addBootstrapImage(){
    this.props.dispatch(addBootstrapImage())
  }
  removeBootstrapImage(){
    this.props.dispatch(removeBootstrapImage())
  }
  addBootstrapJumbotron(){
    this.props.dispatch(addBootstrapJumbotron())
  }
  removeBootstrapJumbotron(){
    this.props.dispatch(removeBootstrapJumbotron())
  }
  addBootstrapLabels(){
    this.props.dispatch(addBootstrapLabels())
  }
  removeBootstrapLabels(){
    this.props.dispatch(removeBootstrapLabels())
  }
  addBootstrapListGroup(){
    this.props.dispatch(addBootstrapListGroup())
  }
  removeBootstrapListGroup(){
    this.props.dispatch(removeBootstrapListGroup())
  }
  addBootstrapPageHeader(){
    this.props.dispatch(addBootstrapPageHeader())
  }
  removeBootstrapPageHeader(){
    this.props.dispatch(removeBootstrapPageHeader())
  }
  addBootstrapPager(){
    this.props.dispatch(addBootstrapPager())
  }
  removeBootstrapPager(){
    this.props.dispatch(removeBootstrapPager())
  }
  addBootstrapPagination(){
    this.props.dispatch(addBootstrapPagination())
  }
  removeBootstrapPagination(){
    this.props.dispatch(removeBootstrapPagination())
  }
  addBootstrapPanel(){
    this.props.dispatch(addBootstrapPanel())
  }
  removeBootstrapPanel(){
    this.props.dispatch(removeBootstrapPanel())
  }
  addBootstrapTables(){
    this.props.dispatch(addBootstrapTables())
  }
  removeBootstrapTables(){
    this.props.dispatch(removeBootstrapTables())
  }
  addBootstrapThumbnail(){
    this.props.dispatch(addBootstrapThumbnail())
  }
  removeBootstrapThumbnail(){
    this.props.dispatch(removeBootstrapThumbnail())
  }



  addBootstrapBreadcrumbs(){
    this.props.dispatch(addBootstrapBreadcrumbs())
  }
  removeBootstrapBreadcrumbs(){
    this.props.dispatch(removeBootstrapBreadcrumbs())
  }
  addMaterializeNavBar(){
    this.props.dispatch(addMaterializeNavBar())
  }
  removeMaterializeNavBar(){
    this.props.dispatch(removeMaterializeNavBar())
  }
  addMaterializeBreadcrumbs(){
    this.props.dispatch(addMaterializeBreadcrumbs())
  }
  removeMaterializeBreadcrumbs(){
    this.props.dispatch(removeMaterializeBreadcrumbs())
  }
  addMaterializeButton(){
    this.props.dispatch(addMaterializeButton())
  }
  removeMaterializeButton(){
    this.props.dispatch(removeMaterializeButton())
  }
  addMaterializeBadges(){
    this.props.dispatch(addMaterializeBadges())
  }
  removeMaterializeBadges(){
    this.props.dispatch(removeMaterializeBadges())
  }
  addMaterializeCard(){
    this.props.dispatch(addMaterializeCard())
  }
  removeMaterializeCard(){
    this.props.dispatch(removeMaterializeCard())
  }
  addMaterializeChips(){
    this.props.dispatch(addMaterializeChips())
  }
  removeMaterializeChips(){
    this.props.dispatch(removeMaterializeChips())
  }
  addMaterializeCollections(){
    this.props.dispatch(addMaterializeCollections())
  }
  removeMaterializeCollections(){
    this.props.dispatch(removeMaterializeCollections())
  }
  addMaterializeFooter(){
    this.props.dispatch(addMaterializeFooter())
  }
  removeMaterializeFooter(){
    this.props.dispatch(removeMaterializeFooter())
  }
  addMaterializeForm(){
    this.props.dispatch(addMaterializeForm())
  }
  removeMaterializeForm(){
    this.props.dispatch(removeMaterializeForm())
  }
  addMaterializeIcon(){
    this.props.dispatch(addMaterializeIcon())
  }
  removeMaterializeIcon(){
    this.props.dispatch(removeMaterializeIcon())
  }
  addMaterializePagination(){
    this.props.dispatch(addMaterializePagination())
  }
  removeMaterializePagination(){
    this.props.dispatch(removeMaterializePagination())
  }
  addMaterializePreloader(){
    this.props.dispatch(addMaterializePreloader())
  }
  removeMaterializePreloader(){
    this.props.dispatch(removeMaterializePreloader())
  }




  render() {
    const { bootstrapNavBarComponent } = this.props;
    const { materializeNavBarComponent } = this.props;
    const { bootstrapButtonComponent } = this.props;
    const { materializeButtonComponent } = this.props;
    const { materializeCardComponent } = this.props;
    const { bootstrapBreadcrumbsComponent } = this.props;
    const { materializeBreadcrumbsComponent } = this.props;
    const { materializeBadgesComponent } = this.props;
    const { materializeChipsComponent } = this.props;
    const { bootstrapGlyphiconsComponent } = this.props;
    const { materializeCollectionsComponent } = this.props;
    const { bootstrapImageComponent } = this.props;

    const { bootstrapJumbotronComponent } = this.props;

    const { bootstrapLabelsComponent } = this.props;

    const { bootstrapListGroupComponent } = this.props;
    const { materializeFooterComponent } = this.props;
    const { bootstrapPageHeaderComponent } = this.props;
    const { materializeFormComponent } = this.props;
    const { bootstrapPagerComponent } = this.props;
    const { materializeIconComponent } = this.props;
    const { bootstrapPaginationComponent } = this.props;
    const { materializePaginationComponent } = this.props;
    const { bootstrapPanelComponent } = this.props;
    const { materializePreloaderComponent } = this.props;
    const { bootstrapTablesComponent } = this.props;
    const { bootstrapThumbnailComponent } = this.props;

    const styles = {
      container: {
        backgroundColor:'transparent',

      }
    }


    return (
      <div className="App">
        {bootstrapNavBarComponent.component}
        {materializeNavBarComponent.component}
        <Grid style={{margin: 0}}>
          <Row className="show-grid">
            <Col xs={4} md={6}>
            <ButtonGroup vertical>
              <Button onClick={this.addMaterializeNavBar.bind(this)} className="App-button">add MaterializeNavBar</Button>
              <Button onClick={this.removeMaterializeNavBar.bind(this)}>remove materialize Nav</Button>
              <Button onClick={this.addBootstrapNavBar.bind(this)}>Add bootstrap NavBar</Button>
              <Button onClick={this.removeBootstrapNavBar.bind(this)}>remove bootstrap NavBar</Button>

              <Button onClick={this.addMaterializeButton.bind(this)}>add MaterializeButton</Button>
              <Button onClick={this.removeMaterializeButton.bind(this)}>remove materialize Button</Button>
              <Button onClick={this.addBootstrapButton.bind(this)}>Add bootstrap Button</Button>
              <Button onClick={this.removeBootstrapButton.bind(this)}>remove bootstrap Button</Button>

              <Button onClick={this.addMaterializeCard.bind(this)}>Add MaterializeCard</Button>
              <Button onClick={this.removeMaterializeCard.bind(this)}>remove materialize Card</Button>

              <Button onClick={this.addMaterializeBreadcrumbs.bind(this)}>Add MaterializeBreadcrumbs</Button>
              <Button onClick={this.removeMaterializeBreadcrumbs.bind(this)}>remove materialize Breadcrumbs</Button>
              <Button onClick={this.addBootstrapBreadcrumbs.bind(this)}>Add bootstrap Breadcrumbs</Button>
              <Button onClick={this.removeBootstrapBreadcrumbs.bind(this)}>remove bootstrap Breadcrumbs</Button>

              <Button onClick={this.addMaterializeBadges.bind(this)}>Add MaterializeBadges</Button>
              <Button onClick={this.removeMaterializeBadges.bind(this)}>remove materialize Badges</Button>

              <Button onClick={this.addMaterializeChips.bind(this)}>Add MaterializeChips</Button>
              <Button onClick={this.removeMaterializeChips.bind(this)}>remove materialize Chips</Button>

              <Button onClick={this.addMaterializeCollections.bind(this)}>Add MaterializeCollections</Button>
              <Button onClick={this.removeMaterializeCollections.bind(this)}>remove materialize Collections</Button>

              <Button onClick={this.addMaterializeFooter.bind(this)}>Add MaterializeFooter</Button>
              <Button onClick={this.removeMaterializeFooter.bind(this)}>remove materialize Footer</Button>

              <Button onClick={this.addMaterializeForm.bind(this)}>Add MaterializeForm</Button>
              <Button onClick={this.removeMaterializeForm.bind(this)}>remove materialize Form</Button>

              <Button onClick={this.addMaterializeIcon.bind(this)}>Add MaterializeIcon</Button>
              <Button onClick={this.removeMaterializeIcon.bind(this)}>remove materialize Icon</Button>

              <Button onClick={this.addMaterializePagination.bind(this)}>Add MaterializePagination</Button>
              <Button onClick={this.removeMaterializePagination.bind(this)}>remove materialize Pagination</Button>
              <Button onClick={this.addBootstrapPagination.bind(this)}>Add bootstrap Pagination</Button>
              <Button onClick={this.removeBootstrapPagination.bind(this)}>remove bootstrap Pagination</Button>

              <Button onClick={this.addMaterializePreloader.bind(this)}>Add MaterializePreloader</Button>
              <Button onClick={this.removeMaterializePreloader.bind(this)}>remove materialize Preloader</Button>

              <Button onClick={this.addBootstrapGlyphicons.bind(this)}>Add bootstrap Glyphicons</Button>
              <Button onClick={this.removeBootstrapGlyphicons.bind(this)}>remove bootstrap Glyphicons</Button>
              <Button onClick={this.addBootstrapGlyphicons.bind(this)}>Add bootstrap Glyphicons</Button>
              <Button onClick={this.removeBootstrapGlyphicons.bind(this)}>remove bootstrap Glyphicons</Button>

              <Button onClick={this.addBootstrapImage.bind(this)}>Add bootstrap Image</Button>
              <Button onClick={this.removeBootstrapImage.bind(this)}>remove bootstrap Imagen</Button>

              <Button onClick={this.addBootstrapJumbotron.bind(this)}>Add bootstrap Jumbotron</Button>
              <Button onClick={this.removeBootstrapJumbotron.bind(this)}>remove bootstrap Jumbotron</Button>

              <Button onClick={this.addBootstrapLabels.bind(this)}>Add bootstrap Labels</Button>
              <Button onClick={this.removeBootstrapLabels.bind(this)}>remove bootstrap Labels</Button>

              <Button onClick={this.addBootstrapListGroup.bind(this)}>Add bootstrap ListGroup</Button>
              <Button onClick={this.removeBootstrapListGroup.bind(this)}>remove bootstrap ListGroup</Button>

              <Button onClick={this.addBootstrapPageHeader.bind(this)}>Add bootstrap PageHeader</Button>
              <Button onClick={this.removeBootstrapPageHeader.bind(this)}>remove bootstrap PageHeader</Button>

              <Button onClick={this.addBootstrapPager.bind(this)}>Add bootstrap Pager</Button>
              <Button onClick={this.removeBootstrapPager.bind(this)}>remove bootstrap Pager</Button>

              <Button onClick={this.addBootstrapPanel.bind(this)}>Add bootstrap Panel</Button>
              <Button onClick={this.removeBootstrapPanel.bind(this)}>remove bootstrap Panel</Button>

              <Button onClick={this.addBootstrapTables.bind(this)}>Add bootstrap Tables</Button>
              <Button onClick={this.removeBootstrapTables.bind(this)}>remove bootstrap Tables</Button>

              <Button onClick={this.addBootstrapThumbnail.bind(this)}>Add bootstrap Thumbnail</Button>
              <Button onClick={this.removeBootstrapThumbnail.bind(this)}>remove bootstrap Thumbnail</Button>
              </ButtonGroup>
            </Col>
            <Col xs={8} md={6}>

              {bootstrapButtonComponent.component}
              {materializeButtonComponent.component}
              {bootstrapBreadcrumbsComponent.component}
              {materializeBreadcrumbsComponent.component}
              {bootstrapGlyphiconsComponent.component}
              {materializeBadgesComponent.component}
              {bootstrapImageComponent.component}
              {materializeCardComponent.component}
              {bootstrapJumbotronComponent.component}
              {materializeChipsComponent.component}
              {bootstrapLabelsComponent.component}
              {materializeCollectionsComponent.component}
              {bootstrapListGroupComponent.component}
              {bootstrapPageHeaderComponent.component}
              {materializeFormComponent.component}
              {bootstrapPagerComponent.component}
              {materializeIconComponent.component}
              {bootstrapPaginationComponent.component}
              {materializePaginationComponent.component}
              {bootstrapPanelComponent.component}
              {materializePreloaderComponent.component}
              {bootstrapTablesComponent.component}
              {bootstrapThumbnailComponent.component}
            </Col>
          </Row>
        </Grid>
        {materializeFooterComponent.component}
      </div>
    );
  }
}
export default App;
