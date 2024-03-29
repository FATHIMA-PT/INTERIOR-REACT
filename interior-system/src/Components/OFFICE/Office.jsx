import React from 'react'
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import reception from '../../Assets/reception.jpg'
import meeting from '../../Assets/meeting.jpg'
import washroom from '../../Assets/washroom.jpg'
import pantry from '../../Assets/pantry.jpg'

function Office() {
  return (
    <>
    <div className="align-items-center justify-content-center mb-3">
      <h2 className="text-primary fw-bolder text-center mt-5">
        OFFICE CATEGORY{" "}
      </h2>
      
      {/* visiting room */}
        <div className="  container   justify-content-around mt-5 ">
          <div className="row" >
            <div className="col-4">
              <Card className="" style={{height:'575px'}}>
                <Card.Img
                  variant="top"
                  className="img img-fluid p-3"
                  style={{ height: "265px" }}
                  src={reception}
                />
                <Card.Body style={{textAlign:"justify"}} >
                  <Card.Title className="text-center">
                  Reception
                  </Card.Title>
                  <Card.Text>
                    The key to creating a fabulous guest room that your
                    friends and family won't want to leave is to treat it as
                    if you were going to stay in it yourself. Give it all the
                    comforts of home: the best mattress, a deep cozy duvet,
                    the tactile throws and plenty of plush towels.
                  </Card.Text>
                  <Button  className="btn btn-outline-warning text-light"><Link to={`/officecategory/reception`} className="text-light" style={{textDecoration:"none"}}>More</Link></Button>
                </Card.Body>
              </Card>
            </div>

            {/* diningb room */}
            <div className="col-4">
              <Card  className="">
                <Card.Img 
                  variant="top"
                  className="img img-fluid p-3"
                  style={{ height: "265px" }}
                  src={meeting}
                />
                <Card.Body className="" style={{textAlign:"justify"}}>
                  <Card.Title className="text-center">Meeting Room</Card.Title>
                  <Card.Text>
                    It is often believed that a family that eats together,
                    stays together, thereby making the dining room one of the
                    most indispensable areas in a house! Whether you are
                    looking for a compact dining unit or a spacious one,
                    here's your daily dose of dining room interior design
                    inspiration to start your home interior journey today.
                  </Card.Text>
                  <Button  className="btn btn-outline-warning text-light"><Link to={`/officecategory/meeting_room`} className="text-light" style={{textDecoration:"none"}}>More</Link></Button>
                </Card.Body>
              </Card>
            </div>

            {/* kitchen */}
            <div className="col-4">
              <Card  className=""  style={{height:'575px'}}>
                <Card.Img
                  variant="top"
                  className="img img-fluid p-3"
                  style={{ height: "265px" }}
                  src={washroom}
                />
                <Card.Body style={{textAlign:"justify"}}>
                  <Card.Title className=" text-center">Washroom</Card.Title>
                  <Card.Text>
                    The modern home kitchen design in India is more seamless
                    and smooth. You see more in-built appliances, the cabinets
                    have profile handles or are push-to-touch. You see
                    lighting divided into ambient and task lights, typically
                    under cabinet lighting, while the materials used for
                    cabinet finishes.
                  </Card.Text>
                  <Button  className="btn btn-outline-warning text-light"><Link to={`/officecategory/bathroom`} className="text-light" style={{textDecoration:"none"}}>More</Link></Button>
                </Card.Body>
              </Card>
            </div>

          {/* bed room */}
            <div className="col-4">
              <Card  className=""  style={{height:'575px'}}>
                <Card.Img
                  variant="top"
                  className="img img-fluid p-3"
                  style={{ height: "265px" }}
                  src={pantry}
                />
                <Card.Body style={{textAlign:"justify"}}>
                  <Card.Title className=" text-center">Pantry</Card.Title>
                  <Card.Text>
                    The modern home kitchen design in India is more seamless
                    and smooth. You see more in-built appliances, the cabinets
                    have profile handles or are push-to-touch. You see
                    lighting divided into ambient and task lights, typically
                    under cabinet lighting, while the materials used for
                    cabinet finishes.
                  </Card.Text>
                  <Button  className="btn btn-outline-warning text-light"><Link to={`/officecategory/pantry`} className="text-light" style={{textDecoration:"none"}}>More</Link></Button>
                </Card.Body>
              </Card>
            </div>

            {/* kidsroom */}
            {/* <div className="col-4">
              <Card  className=""  style={{height:'575px'}}>
                <Card.Img
                  variant="top"
                  className="img img-fluid p-3"
                  style={{ height: "265px" }}
                  src={kidsroom}
                />
                <Card.Body style={{textAlign:"justify"}}>
                  <Card.Title className=" text-center">Kids Room</Card.Title>
                  <Card.Text>
                    The modern home kitchen design in India is more seamless
                    and smooth. You see more in-built appliances, the cabinets
                    have profile handles or are push-to-touch. You see
                    lighting divided into ambient and task lights, typically
                    under cabinet lighting, while the materials used for
                    cabinet finishes.
                  </Card.Text>
                  <Button  className="btn btn-outline-warning text-light"><Link to={`/homecategory/kidsroom`} className="text-light" style={{textDecoration:"none"}}>More</Link></Button>
                </Card.Body>
              </Card>
            </div> */}

             {/* bathroom */}
             {/* <div className="col-4">
              <Card  className=""  style={{height:'575px'}}>
                <Card.Img
                  variant="top"
                  className="img img-fluid p-3"
                  style={{ height: "265px" }}
                  src={bathroom}
                />
                <Card.Body style={{textAlign:"justify"}}>
                  <Card.Title className=" text-center">Bath Room</Card.Title>
                  <Card.Text>
                    The modern home kitchen design in India is more seamless
                    and smooth. You see more in-built appliances, the cabinets
                    have profile handles or are push-to-touch. You see
                    lighting divided into ambient and task lights, typically
                    under cabinet lighting, while the materials used for
                    cabinet finishes.
                  </Card.Text>
                  <Button  className="btn btn-outline-warning text-light"><Link to={`/homecategory/bathroom`} className="text-light" style={{textDecoration:"none"}}>More</Link></Button>
                </Card.Body>
              </Card>
            </div> */}

          </div>
         
        </div>

      </div>
   
  </>  )
}

export default Office