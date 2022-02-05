import React,{ Component } from 'react';

import { 
    // Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle 
} from 'reactstrap';

class DishDetail extends Component{
    
    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish==null){
            return ( <div/> )               
        }else{
            return (
                <div className='col-1 2 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
    }

    renderComments(comms){
        if (comms == null) {
            return (<div></div>)
        }
        const cmnts = comms.map(comment => {
            // const text=comment.date.split("-");
            // const month=text[0];
            // const date=text[1];
            // const year=text[2];
            const space=" ";
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;

                    {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }

    render(){
        const dish=this.props.dish;
        if(dish==null){
            return (
                <div/>
            );
        }

        const dishName=this.renderDish(dish);
        const dishComments=this.renderComments(dish.comments);

        return(
            <div className='row'>
                {dishName}
                {dishComments}
            </div>
        );
    }
}

export default DishDetail;