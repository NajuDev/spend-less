import { connect } from 'react-redux';
import { IncomeAndSpend } from './incomeAndSpend.component';

const mapStateToProps = (state, ownProps) => (
    {
        salaryLabel: ownProps.salaryName,
        salaryAmount: state.annualIncome.annualSalary.amount,
        salaryFromAge: state.annualIncome.annualSalary.fromAge,
        salaryToAge: state.annualIncome.annualSalary.toAge,
        mortgageLabel: ownProps.mortgageName,
        mortgageAmount: state.monthlySpending.mortgage.amount,
        mortgageFromAge: state.monthlySpending.mortgage.fromAge,
        mortgageToAge: state.monthlySpending.mortgage.toAge,
        billsLabel: ownProps.mortgageName,
        billsAmount: state.monthlySpending.bills.amount,
        billsFromAge: state.monthlySpending.bills.fromAge,
        billsToAge: state.monthlySpending.bills.toAge,
        generalLabel: ownProps.generalName,
        generalAmount: state.monthlySpending.general.amount,
        generalFromAge: state.monthlySpending.general.fromAge,
        generalToAge: state.monthlySpending.general.toAge,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        handleSalaryAmount: () => console.log(),
        handleSalaryFromAge: () => console.log(),
        handleSalaryToAge: () => console.log(),
        handleMortgageAmount: () => console.log(),
        handleMortgageFromAge: () => console.log(),
        handleMortgageToAge: () => console.log(),
        handleBillsAmount: () => console.log(),
        handleBillsFromAge: () => console.log(),
        handleBillsToAge: () => console.log(),
        handleGeneralAmount: () => console.log(),
        handleGeneralFromAge: () => console.log(),
        handleGeneralToAge: () => console.log(),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IncomeAndSpend);