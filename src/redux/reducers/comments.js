import { COMMENT_ACTIONS } from "../../constants/actions";

let defaultState = {
  showAddComment: false,
  comment: '',
  comments: []
}

const comments = (state = defaultState, action) => {
  switch (action.type) {
    case COMMENT_ACTIONS.COMMENT_ACTIONS_GET_COMMENTS: {
      return {
        ...state,
        comments: action.comments
      }
    }

    case COMMENT_ACTIONS.COMMENT_ACTIONS_ADD_COMMENT: {
      let commentsAux = [ ...state.comments ];
      commentsAux.push({comment: action.comment});
      return {
        ...state,
        comments: commentsAux,
      }
    }
  
    case COMMENT_ACTIONS.COMMENT_ACTIONS_SHOW_ADD_COMMENT:
      return {
        ...state,
        showAddComment: !state.showAddComment
      }
    
    case COMMENT_ACTIONS.COMMENT_ACTIONS_SAVE_COMMENT:
      return {
        ...state,
        comment: action.comment
    }

  case COMMENT_ACTIONS.COMMENT_ACTIONS_DELETE_COMMENT: {
    let commentsAux = [ ...state.comments ];

    for (let i = 0; i < commentsAux.length; i++) {
      if ((commentsAux[i].comment === action.comment) && i === (action.position)) commentsAux.splice(i, 1);
    }
    return {
      ...state,
      comments: commentsAux
    }
  }

    default:
      return state
  }
}

export default comments
