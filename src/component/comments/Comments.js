import React from 'react'

export default function Comments() {
   const Comments= [
        {
            "_id": "6464a9d5301fb3c310f21a5b",
            "user_id": "6448f15ad32501bfbe7b255f",
            "comment_of": "project",
            "comment": "thats great project ",
            "replies": [],
            "createdAt": "2023-05-17T10:17:57.770Z",
            "updatedAt": "2023-05-17T10:17:57.770Z",
            "__v": 0
        },
        {
            "_id": "6464aa18301fb3c310f21a61",
            "user_id": "6448f15ad32501bfbe7b255f",
            "comment_of": "project",
            "comment": "these task are Amazing ",
            "replies": [
                {
                    "comment": "thats true ",
                    "user_id": "6448f15ad32501bfbe7b255f",
                    "createdAt": "2023-05-17T10:22:43.798Z",
                    "_id": "6464abf9d6ab3158ce0f59f7"
                },
                {
                    "comment": "thats true ",
                    "user_id": "6448f15ad32501bfbe7b255f",
                    "createdAt": "2023-05-17T10:28:20.689Z",
                    "_id": "6464ac480dc45790d8b3988a"
                }
            ],
            "createdAt": "2023-05-17T10:19:04.245Z",
            "updatedAt": "2023-05-17T10:28:24.584Z",
            "__v": 2
        }
    ]

  return (
    <div>
      
    </div>
  )
}
