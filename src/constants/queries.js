
import { gql } from "apollo-boost";

export const GET_COMMENTS = gql`
{
  comments {
    comment
  }
}
`
export const GET_COMMENTS_FN = gql`
query getListComments {
  comments {
    comment
  }
}
`

export const POST_COMMENT = gql`
query addSimpleComment($comment: String) {
  addSimpleComment(comment: $comment) {
      comment
    }
}`

export const DELETE_COMMENT = gql`
query deleteSimpleComment($comment: String, $position: Int) {
  deleteSimpleComment(comment: $comment, position: $position) {
      comment,
      position
    }
}
`