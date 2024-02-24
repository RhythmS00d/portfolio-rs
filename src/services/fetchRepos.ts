import axios from "axios";

const headers = {
  Authorization: "Bearer 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",
  "User-Agent": "RhythmS00d",
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "Access-Control-Allow-Origin": "*",
};

export const fetchRepos = async () => {
  return await axios
    .get(`https://api.github.com/users/RhythmS00d/repos`, {
      headers: headers,
    })
    .then((result) =>
      Array.from(result.data).map((repo: any) => {
        return {
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          homepage: repo.homepage,
          image: ""
        };
      })
    );
};
