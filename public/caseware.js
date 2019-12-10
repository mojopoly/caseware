class CaseWare {
  async getEmployeeGeo(name) {
    const profileResponse = await fetch(`/api/employees?fullName=${name}`);
    
    if (profileResponse.status === 404) return false;

    const profile = await profileResponse.json();

    return {
      profile
    };
    
  }
}
