import React from 'react';
import { connect } from 'react-redux';

class WrongAnswer2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, index, i } = this.props;
    const testid = `wrong-answer-${i}`;
    const resposta = data.results[index];
    const respostaIncorreta = resposta.incorrect_answer
    return (
      <div>
        <p data-testid={testid}>{respostaIncorreta[0]}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

export default connect(mapStateToProps)(WrongAnswer2);
