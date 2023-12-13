/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type dashboardQueryVariables = {};
export type dashboardQueryResponse = {
    readonly currentUser: {
        readonly id: string;
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly avatarUrl: string | null;
        readonly profile: {
            readonly id: string;
            readonly freelancerRate: {
                readonly formatted: string | null;
            } | null;
            readonly freelancerType: {
                readonly id: string;
                readonly name: string | null;
            } | null;
            readonly totalExperience: number | null;
            readonly textIntroduction: string | null;
        } | null;
        readonly userSkills: ReadonlyArray<{
            readonly experience: number | null;
            readonly skill: {
                readonly id: string;
                readonly name: string | null;
            } | null;
        }> | null;
        readonly timezone: string | null;
    } | null;
    readonly contracts: {
        readonly nodes: ReadonlyArray<{
            readonly client: {
                readonly id: string;
                readonly firstName: string | null;
                readonly firms: ReadonlyArray<{
                    readonly name: string | null;
                }> | null;
            } | null;
            readonly job: {
                readonly id: string;
                readonly title: string;
                readonly description: string | null;
                readonly questions: ReadonlyArray<{
                    readonly title: string | null;
                }> | null;
            } | null;
        } | null> | null;
        readonly totalCount: number | null;
    };
};
export type dashboardQuery = {
    readonly response: dashboardQueryResponse;
    readonly variables: dashboardQueryVariables;
};



/*
query dashboardQuery {
  currentUser {
    id
    firstName
    lastName
    avatarUrl
    profile {
      id
      freelancerRate {
        formatted
      }
      freelancerType {
        id
        name
      }
      totalExperience
      textIntroduction
    }
    userSkills {
      experience
      skill {
        id
        name
      }
      id
    }
    timezone
  }
  contracts(first: 5) {
    nodes {
      client {
        id
        firstName
        firms {
          name
          id
        }
      }
      job {
        id
        title
        description
        questions {
          title
          id
        }
      }
      id
    }
    totalCount
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Profile",
  "kind": "LinkedField",
  "name": "profile",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Money",
      "kind": "LinkedField",
      "name": "freelancerRate",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "formatted",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FreelancerType",
      "kind": "LinkedField",
      "name": "freelancerType",
      "plural": false,
      "selections": (v5/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalExperience",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "textIntroduction",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experience",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Skill",
  "kind": "LinkedField",
  "name": "skill",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timezone",
  "storageKey": null
},
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v10/*: any*/),
        "concreteType": "ContractConnection",
        "kind": "LinkedField",
        "name": "contracts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Contract",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "client",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Firm",
                    "kind": "LinkedField",
                    "name": "firms",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "job",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/)
        ],
        "storageKey": "contracts(first:5)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v10/*: any*/),
        "concreteType": "ContractConnection",
        "kind": "LinkedField",
        "name": "contracts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Contract",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "client",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Firm",
                    "kind": "LinkedField",
                    "name": "firms",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "job",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                      (v11/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v13/*: any*/)
        ],
        "storageKey": "contracts(first:5)"
      }
    ]
  },
  "params": {
    "cacheID": "2bfd788f99f5d25f65180e056d23c9e2",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery {\n  currentUser {\n    id\n    firstName\n    lastName\n    avatarUrl\n    profile {\n      id\n      freelancerRate {\n        formatted\n      }\n      freelancerType {\n        id\n        name\n      }\n      totalExperience\n      textIntroduction\n    }\n    userSkills {\n      experience\n      skill {\n        id\n        name\n      }\n      id\n    }\n    timezone\n  }\n  contracts(first: 5) {\n    nodes {\n      client {\n        id\n        firstName\n        firms {\n          name\n          id\n        }\n      }\n      job {\n        id\n        title\n        description\n        questions {\n          title\n          id\n        }\n      }\n      id\n    }\n    totalCount\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f607928813663aca77963f38ffc86861';
export default node;
