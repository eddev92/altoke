import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo';
import './App.css';
import HomeComponent from './components/home';
import NavComponent from './components/shared/nav';
import ButtonComponent from './components/shared/button-search-job';
import ModalComponent from './components/shared/modal';
import CardComponent from './components/shared/card';
import TableGaleriesComponent from './components/table-galeries';
import AdvertiseModalContent from './components/shared/modal/advertise';
import FilterOptions from './components/shared/filter';
import DetailProduct from './components/detail-product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSearchJob: false,
      optionSelected: 1,
      showListGaleries: false,
			jobWished: '',
			seeAllGaleries: false,
			showInitModal: false,
			idTargetModal: 'advertiseModal',
			children: null
    }
  }

  componentDidMount() {
  }

  handleOption = (option) => {
		console.log(option)
		const { jobWished, optionSelected } = this.state;
		if (option > 0) {
			return this.validationTypeModal(option);
		}
		if (jobWished && jobWished.length) {
			return this.setState({ showListGaleries: true });
		}
		return this.setState({ activeSearchJob: true });    
	}
	validationTypeModal = (option) => {
		const { optionSelected } = this.state;
		const aux =  <DetailProduct />
		const aux2 = <AdvertiseModalContent />

		switch (option) {
			case 1: return this.setState({ idTargetModal: 'selectItem', children: aux, optionSelected: option }, () => { this.renderModal(optionSelected)});
			case 2: return this.setState({ idTargetModal: 'advertiseModal', children: aux2, optionSelected: option }, () => { this.renderModal(optionSelected)});
			case 3: return this.setState({ idTargetModal: 'advertiseModal', children: aux2, optionSelected: option }, () => { this.renderModal(optionSelected)});
			default: return null;
		}
	}
  handleJob = (e) => {    
   return this.setState({ jobWished: e.target.value });
	}
	showAllGaleries = () => {
		return this.setState({ seeAllGaleries: true });
	}
	renderModal = (option, title) => {
		const { idTargetModal, children } = this.state;
	
		if (option > 0)
		return (			
			<ModalComponent title="ANUNCIATE AQUI" idTargetModal={idTargetModal} >
				{children && children}
		</ModalComponent>
		)		
	}
  render() {
    const { activeSearchJob, showListGaleries, jobWished, seeAllGaleries, idTargetModal, optionSelected, modalProps } = this.state;
    const auxModalProps = {
      dataTarget: `#${idTargetModal}`
		}
		const initModalProps = {
      dataTarget: '#initModal'
    }

    return (
      <div className="App">
        <NavComponent />
        <HomeComponent handleOption={this.handleOption} active={activeSearchJob} modalProps={auxModalProps} handleJob={this.handleJob} showListGaleries={showListGaleries} jobWished={jobWished}/>
        <ButtonComponent />
				{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target={initModalProps.dataTarget}>
				Launch demo modal
			</button> */}
			<div className="container">
				{/* <div className="row filterOptions">
					<FilterOptions />
				</div> */}
				<div className={`col-12 row text-center see-galeries ${!seeAllGaleries && 'desactive'} ${seeAllGaleries && 'active'}`}>
					{!seeAllGaleries && <h3 onClick={this.showAllGaleries}>CONOCE TODOS LOS PRODUCTOS</h3>}
					{seeAllGaleries && <TableGaleriesComponent handleOption={this.handleOption} modalProps={auxModalProps} />}
				</div>
			</div>	
			{optionSelected && this.renderModal(optionSelected)}
			{/* {this.renderModal()} */}
  </div>
  );  
}


}
const mapStateToProps = (state, props) => {
  return {
    // comment: state.comments.comment,
    // comments: state.comments.comments,
    // showAddComment: state.comments.showAddComment,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleAddComment: () => { dispatch(showAddComment()) },
    // handleComment: (comment) => { dispatch(handleComment(comment)) },
    // saveComment: (comment) => { dispatch(addComment(comment)) },
    // deleteComment: (comment, index) => { dispatch(deleteComment(comment, index)) },
    // getComments: (comments) => { dispatch(getComments(comments)) }
  }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(withApollo(App));
