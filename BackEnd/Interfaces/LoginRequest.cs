namespace BackEnd.Interfaces
{
    public struct LoginRequest
    {
        public string email {get; set;}
        public string token {get; set;}

        public string role {get; set;}
    }
}
