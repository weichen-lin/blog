import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const user_id = 'weichen-lin';
const read_user_token = process.env.GITHUB_TOKEN;

const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY = `query {
      user(login: "${user_id}") {
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            months {
              firstDay
              name
              totalWeeks
            }
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
              firstDay
            }
          }
        }
      }
}`;

const getGithubUserContribution = async () => {
  const response = await fetch(GITHUB_USER_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${read_user_token}`,
    },
    body: JSON.stringify({
      query: GITHUB_USER_QUERY,
    }),
  });
  const status = response.status;

  if (status > 400) {
    return { status, data: null };
  }

  const responseJson = await response.json();

  return { status, data: responseJson.data.user };
};

export async function GET() {
  const response = await getGithubUserContribution();

  return NextResponse.json(response.data);
}
