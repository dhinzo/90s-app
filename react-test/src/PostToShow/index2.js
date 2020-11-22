// import React, {useState} from 'react'
// import { Card, Icon, Image, Segment, Button, Modal, Header } from 'semantic-ui-react'


// export default function PostToShow(props){
// 	const [open, setOpen] = React.useState(false)
	
// 		return(
//             <Modal
//             onClose={() => setOpen(false)}
//             onOpen={() => setOpen(true)}
//             open={open}
//             trigger={<Button>Show Modal</Button>}
//           >
//             <Modal.Header>Select a Photo</Modal.Header>
//             <Modal.Content image>
//               <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
//               <Modal.Description>
//                 <Header>Default Profile Image</Header>
//                 <p>
//                   We've found the following gravatar image associated with your e-mail
//                   address.
//                 </p>
//                 <p>Is it okay to use this photo?</p>
//               </Modal.Description>
//             </Modal.Content>
//             <Modal.Actions>
//               <Button color='black' onClick={() => setOpen(false)}>
//                 Nope
//               </Button>
//               <Button
//                 content="Yep, that's me"
//                 labelPosition='right'
//                 icon='checkmark'
//                 onClick={() => setOpen(false)}
//                 positive
//               />
//             </Modal.Actions>
//           </Modal>
//         )
// }
// //             <Modal
// //         onClose={() => setOpen(false)}
// //         onOpen={() => setOpen(true)}
// //         open={open}
// //         trigger={<Button>Sign On</Button>}
// //         >
// //         <Modal.Header id='login-header'>
// //             <Button

// //                 id='header-close'
// //                 icon='x'
// //                 floated='right'
// //                 size='mini'
// //                 onClick={() => setOpen(false)}
// //                 />
// //         </Modal.Header>
// //         <Modal.Content>
// // 			<Segment> 
// //   				<Card styles="box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);">
// //     				<Image 
// //     					src={props.showThisPost.img} alt="90s pic"/>
// // 	    			<Card.Content>
// // 	    				<Card.Header>{props.showThisPost.title}</Card.Header>
// // 	    				<Card.Meta>
// //         					<span className='date'>{props.showThisPost.created_at}</span>
// //         				</Card.Meta>
// // 	    			<Card.Description>
// // 	    				{props.showThisPost.description}
// // 	    			</Card.Description>
// // 	    			</Card.Content>
// // 	    			<Card.Content extra>
// //       					<a className="left floated">
// //         			<Icon name='user' />
// //         				{props.showThisPost.owner.username}
// //       					</a>
// //       					<a className="right floated">
// //         				<Icon name='like' />
// //         				{props.showThisPost.likes} likes
// //       					</a>
// //     				</Card.Content>
// //     				<Card.Content extra>
// //     					<div className="ui large transparent left icon input left floated">
// //       						<i className="heart outline icon"></i>
// //       						<input type="text" placeholder="Add Comment..."/>
// //     					</div>
// //     				</Card.Content>
// // 	    			<Button onClick={props.closeShowModal}>Back</Button>
					
// // 	    		</Card>
// // 			</Segment>
// //             </Modal.Content>
// //             </Modal>
// // 		)
   
// // }