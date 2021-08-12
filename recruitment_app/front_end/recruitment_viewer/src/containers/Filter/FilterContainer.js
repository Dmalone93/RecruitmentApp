import React, {Component} from 'react';
import '../../css/FilterContainer.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
class FilterContainer extends Component {

  constructor(props) {
     super(props);

     this.state = {
       collapse: false,
       criteria: {
         salary:null,
         role: null,
         skillLevel: null,
         jobType: null
       }

     };

     this.handleSelection = this.handleSelection.bind(this);
     this.filterJobs = this.filterJobs.bind(this);
     this.toggle = this.toggle.bind(this);
   }

   toggle() {
     this.setState({ collapse: !this.state.collapse });
   }

   handleSelection(event){
     let newCriteria = this.state.criteria
     newCriteria[event.target.name] = event.target.value

     this.setState({ criteria: newCriteria }, () => {
       this.filterJobs()
     });
   }

   filterJobs(){
     let filteredJobs = this.props.jobsData;

     for(let key in this.state.criteria){
       let value = this.state.criteria[key]
       if (value){
         filteredJobs = filteredJobs.filter(job => {
           return job[key] === value;
         })
       }
     }

     this.props.handleFilter(filteredJobs);
   }

  render(){

    return(
      <div className="filter-container">
      <div className="text-right">
      <Button className="text-right"outline color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Filter</Button>
      </div>
      <Collapse isOpen={this.state.collapse}>
      <Card>
      <CardBody>
      <div className="d-flex mb-3 all-filters">
      <div className="p-2 col filter-role">
      <legend>Role</legend>
      <FormGroup tag="fieldset">

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role"  value="Software Developer" onClick={this.handleSelection}/>{' '}
      Software Developer
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role" value="Tester" onClick={this.handleSelection}/>{' '}
      Tester
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role" value="Product Owner" onClick={this.handleSelection}/>{' '}
      Product Owner
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role" value="Back-End Developer" onClick={this.handleSelection}/>{' '}
      Back-End Developer
      </Label>
      </FormGroup>
      </FormGroup>
      </div>
      <div className="p-2 col filter-skill">
      <legend>Skill</legend>
      <FormGroup tag="fieldset">

      <FormGroup check>
      <Label check>
      <Input type="radio" name="skillLevel" value="Junior" onClick={this.handleSelection}/>{' '}
      Junior
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="skillLevel" value="Mid-Level" onClick={this.handleSelection}/>{' '}
      Mid-Level
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="skillLevel" value="Senior" onClick={this.handleSelection}/>{' '}
      Senior
      </Label>
      </FormGroup>
      </FormGroup>
      </div>
      <div className="p-2 col filter-jobtype">
      <legend>Type</legend>
      <FormGroup tag="fieldset" >

      <FormGroup check>
      <Label check>
      <Input type="radio" name="jobType" value="Full-Time" onClick={this.handleSelection}/>{' '}
      Full Time
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="jobType" value="Part-Time" onClick={this.handleSelection}/>{' '}
      Part Time
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="jobType" value="Internship" onClick={this.handleSelection}/>{' '}
      Internship
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="jobType" value="Temporary" onClick={this.handleSelection}/>{' '}
      Temporary
      </Label>
      </FormGroup>
      </FormGroup>
      </div>

      </div>
          <Button className="text-right"outline color="secondary" href="/">Reset</Button>
      </CardBody>
      </Card>
      </Collapse>
      </div>


    )
  }

}

export default FilterContainer;
