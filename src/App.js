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
			children: null,
			pictureSelected: 0,
			pictures: [1,2,32],
			buySteps: {
				step1: 1,
				step2: 2,
				step3: 3,
				step4: 4,
				step5: 5
			},
			optionForBuy: 0,
			quoteOption: 0,
			showOptions: false,
			productSelected: {
				price: 50.00
			},
			orders: [],
			orderPreview:	{
				orderId: '',
				quantity: null,
				size: '',
				color: ''
			},
			disabledButtonAddProduct: true
    }
  }

  componentDidMount() {
  }

  handleOptionHome = (option) => {
		console.log(option)
		const { jobWished, optionSelected } = this.state;
		if (option === 1) {
			return this.setState({ activeSearchJob: true })
		}
		if (jobWished && jobWished.length) {
			return this.setState({ showListGaleries: true,  });
		}
		return this.setState({ optionSelected: 2 });    
	}
	selectProduct = (productSelected) => {
		return this.setState({ optionSelected: 1, productSelected }); 
	}
	handleMiniPicture = (pictureSelected) => {
		console.log(pictureSelected)
		if (pictureSelected >= 0) {
			return this.setState({ pictureSelected })
		}
	}

	showOptions = () => {
		return this.setState({ showOptions: true });
	}
	closeModal = () => {
		return this.setState({ showOptions: false, optionForBuy: 0 })
	}
	// validationTypeModal = (option) => {
	// 	const { optionSelected, pictureSelected, pictures } = this.state;
	// 	const aux =  <DetailProduct handleMiniPicture={this.handleMiniPicture} selected={pictureSelected} pictures={pictures} />
	// 	const aux2 = <AdvertiseModalContent />

	// 	switch (option) {
	// 		case 1: return this.setState({ idTargetModal: 'selectItem', children: aux, optionSelected: option }, () => { this.renderModal(optionSelected)});
	// 		case 2: return this.setState({ idTargetModal: 'advertiseModal', children: aux2, optionSelected: option }, () => { this.renderModal(optionSelected)});
	// 		case 3: return this.setState({ idTargetModal: 'advertiseModal', children: aux2, optionSelected: option }, () => { this.renderModal(optionSelected)});
	// 		default: return null;
	// 	}
	// }
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
	chooseItemNow = () => {
		this.setState({ showOptions: true });
	}
	conFirmStep = (option) => { this.setState({ optionForBuy: option,showOptions: false }) }

	confirmOrderPreview = (order) => {  }

	addProductForOrder = () => {
		const { orders, orderPreview } = this.state;
		console.log(orderPreview)
		if (orderPreview.size && orderPreview.color) {
			const ordersAux = [ ...orders ];
			orderPreview.quantity = Number(orderPreview.quantity);
			ordersAux.push(orderPreview);
			return this.setState({ addProduct: true, orders: ordersAux, disabledButtonConfirmOrder: false });
		}
		return alert("Todos los campos son requeridos!");
	}

	confirmOrderWithDetails = () => {
		this.setState({ optionForBuy: 2 })
	}

	handleProductInfoPreview = (info) => {
		const { orderPreview } = this.state;
		const orderAux = { ...orderPreview };
		orderAux[info.target.id] = info.target.value;
		this.setState({ orderPreview: orderAux });
	}

	editOrderPreview = () => {
		this.setState({ optionForBuy: 1 })
	}

  render() {
		const { optionForBuy,
						showOptions,
						pictures,
						pictureSelected,
						activeSearchJob,
						showListGaleries,
						jobWished,
						seeAllGaleries,
						idTargetModal,
						optionSelected,
						productSelected,
						disabledButtonConfirmOrder,
						orderPreview,
						orders
		} = this.state;
    const auxModalProps = {
      dataTarget: `#${idTargetModal}`
		}
		console.log(orders)
    return (
      <div className="App">
        <NavComponent />
        <HomeComponent handleOption={this.handleOptionHome} active={activeSearchJob} modalProps={auxModalProps} handleJob={this.handleJob} showListGaleries={showListGaleries} jobWished={jobWished}/>
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
					{seeAllGaleries && <TableGaleriesComponent handleOption={this.selectProduct} modalProps={auxModalProps} />}
				</div>
			</div>	
			{/* {optionSelected && this.renderModal(optionSelected)} */}
			{optionSelected &&  (
			<ModalComponent title="ANUNCIATE AQUI" idTargetModal={idTargetModal} closeModal={this.closeModal} >
				{optionSelected === 1 && <DetailProduct
																	chooseItem={this.chooseItemNow}
																	showOptions={showOptions}
																	handleMiniPicture={this.handleMiniPicture}
																	selected={pictureSelected}
																	pictures={pictures}
																	conFirmStep={this.conFirmStep}
																	quoteProduct={this.quoteProduct}
																	optionForBuy={optionForBuy}
																	productSelected={productSelected}
																	addProductForOrder={this.addProductForOrder}
																	disabledButtonConfirmOrder={disabledButtonConfirmOrder}
																	confirmOrderWithDetails={this.confirmOrderWithDetails}
																	handleProductInfoPreview={this.handleProductInfoPreview}
																	orderPreview={orderPreview}
																	orders={orders}
																	editOrderPreview={this.editOrderPreview}
																/>
															}
				{optionSelected === 2 && <AdvertiseModalContent />}
		</ModalComponent>
			)}
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
