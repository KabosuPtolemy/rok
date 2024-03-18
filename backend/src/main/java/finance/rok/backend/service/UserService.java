package finance.rok.backend.service;

import finance.rok.backend.dto.UserDTO;
import finance.rok.backend.dto.request.RegisterUserRequest;
import finance.rok.backend.dto.response.BaseResponse;

public interface UserService {

    String enableAccount(String id);

    UserDTO getUserByEmail(String email);

    BaseResponse registerUser(RegisterUserRequest registerUserRequest);

    UserDTO updateUser(String id, UserDTO userDTO);

    void deleteUserById(String id);

}
