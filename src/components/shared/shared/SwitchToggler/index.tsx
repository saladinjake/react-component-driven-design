export const ViewSwitchToggler = props => {
    const { condition, children } = props
    return children.find(child => {
      return child.props.condition === condition
    })      
  }

export const CaseDirective = ({ children, condition }) => {   return children;}; 