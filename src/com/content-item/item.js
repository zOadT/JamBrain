import { h, Component } 				from 'preact/preact';

import NavSpinner						from 'com/nav-spinner/spinner';
import NavLink 							from 'com/nav-link/link';
import SVGIcon 							from 'com/svg-icon/icon';

import ContentBody						from 'com/content-body/body';
import ContentBodyMarkup				from 'com/content-body/body-markup';
import ContentBodyEdit					from 'com/content-body/body-edit';

import ContentHeaderCommon				from 'com/content-header/header-common';
import ContentFooterCommon				from 'com/content-footer/footer-common';
import ContentHeaderEdit				from 'com/content-header/header-edit';
import ContentFooterEdit				from 'com/content-footer/footer-edit';

import ContentHeadlineEdit				from 'com/content-headline/headline-edit';

import ContentCommonBody				from 'com/content-common/common-body';
import ContentCommonNav					from 'com/content-common/common-nav';
import ContentCommonNavButton			from 'com/content-common/common-nav-button';

import ContentSimple					from 'com/content-simple/simple';


import $Node							from '../../shrub/js/node/node';

export default class ContentItem extends Component {
	constructor( props ) {
		super(props);
		
//		this.state = {
//			'edit': true,
//			'modified': false,
//			
//			'authors': null,
//			
//			'title': null,
//			'body': null
//		};
//
//		this.onClickEdit = this.onClickEdit.bind(this);
//		this.onClickPreview = this.onClickPreview.bind(this);
//		this.onClickSave = this.onClickSave.bind(this);
//		this.onClickPublish = this.onClickPublish.bind(this);
//		this.onClickPublish2 = this.onClickPublish2.bind(this);
//		
//		this.onModifyTitle = this.onModifyTitle.bind(this);
//		this.onModifyBody = this.onModifyBody.bind(this);

		this.onSetJam = this.onSetJam.bind(this);
		this.onSetCompo = this.onSetCompo.bind(this);
	}
//	
//	componentDidMount() {
////		$Node.Get(this.props.node.author)
////		.then( r => {
////			console.log(r.node);
////			if ( r.node.length ) {
////				console.log('hoo');
////				this.setState({ 'authors': r.node });
////			}
////		})
////		.catch(err => {
////			this.setState({ 'error': err });
////		});
//	}
//	
//	onClickEdit(e) {
//		console.log('edit');
//		this.setState({ 'edit': true });
//	}
//	onClickPreview(e) {
//		console.log('prev');
//		this.setState({ 'edit': false });
//	}
//	onClickSave(e) {
//		console.log('save');
//		
//		var Title = this.state.title ? this.state.title : this.props.node.name;
//		var Body = this.state.body ? this.state.body : this.props.node.body;
//		
//		return $Node.Update(this.props.node.id, Title, Body)
//		.then(r => {
//			if ( r.status == 200 ) {
//				this.setState({ 'modified': false });
//			}
//			else {
//				if ( r.caller_id == 0 || (r.data && r.data.caller_id == 0) ) {
//					location.hash = "#savebug";
//				}
//				else {
//					this.setState({ 'error': r.status + ": " + r.error });
//				}
//			}
//		})
//		.catch(err => {
//			console.log(err);
//			this.setState({ 'error': err });
//		});
//	}
//	onClickPublish(e) {
//		console.log('pub');
//		
//		this.onClickSave(e)
//		.then( rr => {
//			console.log("LETS PUBLISH");
//			$Node.Publish(this.props.node.id, "compo")
//			.then(r => {
//				if ( r.status == 200 ) {
//					location.hash = "#submit";
//				}
//			})
//			.catch(err => {
//				this.setState({ 'error': err });
//			});
//		})
//		.catch(err => {
//			this.setState({ 'error': err });
//		});
//	}
//
//	onClickPublish2(e) {
//		console.log('pub');
//		
//		this.onClickSave(e)
//		.then( rr => {
//			console.log("LETS PUBLISH");
//			$Node.Publish(this.props.node.id, "jam")
//			.then(r => {
//				if ( r.status == 200 ) {
//					location.hash = "#submit";
//				}
//			})
//			.catch(err => {
//				this.setState({ 'error': err });
//			});
//		})
//		.catch(err => {
//			this.setState({ 'error': err });
//		});
//	}	
//	
//	onModifyTitle( e ) {
//		this.setState({ 'modified': true, 'title': e.target.value });
//	}
//	onModifyBody( e ) {
//		this.setState({ 'modified': true, 'body': e.target.value });
//	}
//	
//	
//	
//	render( {node, user, path, extra}, {edit, modified, authors, title, body, error} ) {
//		var EditMode = false;
//		
//		var ShowError = null;
//
//		var ShowEditBar = null;
//		var ShowItem = null;
//		
//		if ( error ) {
//			ShowError = <div class="-error"><strong>Error</strong>: {error}</div>;
//		}
//
//		// Hack Edit mode only if you're the author
//		if ( user && user.id == node.author ) {
//			var EditMode = extra.length ? extra[0] === 'edit' : false;
//			
//			var IsPublished = node.subsubtype.length;//;Number.parseInt(node.published) !== 0;
//	
//			if ( EditMode ) {
//				ShowEditBar = <ContentHeadlineEdit edit={edit} modified={modified} published={IsPublished} onedit={this.onClickEdit} onpreview={this.onClickPreview} onsave={this.onClickSave} onpublish={this.onClickPublish} onpublish2={this.onClickPublish2} />;
//			}
//		}
//
//		if ( EditMode && edit ) {
//			ShowItem = (
//				<div class="content-base content-common content-item">
//					<ContentHeaderEdit title={title ? title : node.name} event={node.subsubtype} onmodify={this.onModifyTitle} author={authors} />
//					<ContentBody>{IsPublished ? "Event: "+node.subsubtype : ""}</ContentBody>
//					<ContentBodyEdit onmodify={this.onModifyBody}>{body ? body : node.body}</ContentBodyEdit>
//					<ContentFooterEdit node={node} user={user} love />
//				</div>
//			);
//		}
//		else {
//			ShowItem = (
//				<div class="content-base content-common content-item">
//					<ContentHeaderCommon title={title ? title : node.name} path={path} />
//					<ContentBody>{IsPublished ? (<div><strong>Event:</strong> {node.subsubtype}</div>) : ""}</ContentBody>
//					<ContentBodyMarkup>{body ? body : node.body}</ContentBodyMarkup>
//					<ContentFooterCommon node={node} user={user} love />
//				</div>
//			);
//		}
//		
//		if ( EditMode ) {
//			return <div>{ShowEditBar}{ShowError}{ShowItem}</div>;
//		}
//		else {
//			return <div>{ShowItem}</div>;
//		}
//	}

	setSubSubType( type ) {
		return $Node.Transform(this.props.node.id, 'item', 'game', type)
		.then( r => {
			if ( r ) {
				if ( r.changed ) {
					console.log( 'oo', this.props.node.subsubtype );
					this.props.node.subsubtype = type;
					this.setState({});
				}
			}
			return r;
		});
	}

	onSetJam( e ) {
		return this.setSubSubType('jam')
			.then( r => {
				
			});
	}
	onSetCompo( e ) {
		return this.setSubSubType('compo')
			.then( r => {
				
			});
	}

	render( props, state ) {
		props = Object.assign({}, props);
		
		var node = props.node;
		var user = props.user;
		var path = props.path;
		var extra = props.extra;
		var featured = props.featured;
		
		var Category = '/';

		if ( node ) {
			if ( node.subtype == 'game' ) {
				props.header = "GAME";
				props.headerClass = "-col-a";
				props.titleIcon = "gamepad";
			}
			
			if ( node.subsubtype == 'jam' ) {
				props.header += ": JAM";
				Category = '/jam';
			}
			else if ( node.subsubtype == 'compo' ) {
				props.header += ": COMPO";
				Category = '/compo';
			}
			else {
				props.nopublish = true;
			}
			
			props.draft = "Game";
		}
		
		var ShowEventPicker = null;
		if ( extra && extra.length && extra[0] == 'edit' ) {
			ShowEventPicker = (
				<ContentCommonNav>
					<div class="-label">Event</div>
					<ContentCommonNavButton onclick={this.onSetJam} class={Category == '/jam' ? "-selected" : ""}><SVGIcon>users</SVGIcon><div>Jam</div></ContentCommonNavButton>
					<ContentCommonNavButton onclick={this.onSetCompo} class={Category == '/compo' ? "-selected" : ""}><SVGIcon>user</SVGIcon><div>Compo</div></ContentCommonNavButton>
					<div>Please refer to <NavLink blank href="/event/ludum-dare/rules"><strong>the rules</strong></NavLink>. If you {"don't"} know, pick the <strong>Jam</strong>.<br />Because {"we're"} running late, {"we're"} letting you choose all weekend. Honour system, ok?</div>
				</ContentCommonNav>
			);
		}
		
		var ShowOptOut = null;
		if ( true ) {
			ShowOptOut = (
				<ContentCommonBody>
					<div class="-label">Voting Category Opt-outs</div>
					{"Opt-out of categories here. Say, if your team didn't make all your graphics, audio, or music during the event."}
					{"Many participants are making original content from scratch during the event. It's not fair to get a rating a category if you didn't do the same."}
				</ContentCommonBody>
			);
		}
		
		var ShowShots = null;
		if ( true ) {
			ShowShots = (
				<ContentCommonBody>
					<div class="-label">Images</div>
					<div>Cover Image</div>
					<div>Screen Shots</div>
				</ContentCommonBody>
			);
//					<div>Video</div>
		}

		var ShowLinks = null;
		if ( true ) {
			ShowLinks = (
				<ContentCommonBody>
					<div class="-label">Links</div>
					<div>Download Links</div>
					<div>Source Code</div>
				</ContentCommonBody>
			);
		}
		
		props.editonly = (
			<div>
				{ShowEventPicker}
				{ShowOptOut}
				{ShowShots}
				{ShowLinks}
			</div>
		);

		return <ContentSimple {...props} by authors />;
	}
}
