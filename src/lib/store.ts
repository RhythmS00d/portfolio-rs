import { makeAutoObservable } from "mobx";

import { fetchRepos } from "@/services/fetchRepos";

type REPO = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  homepage: string;
  image: string;
};

class Store {
  repos: REPO[];

  constructor(repos: REPO[]) {
    makeAutoObservable(this);
    this.repos = repos
  }
}

export const useStore = new Store(await fetchRepos());
