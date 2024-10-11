from fastapi import FastAPI, APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from vc import issue_credential, verify_credential, verify_presentation

app = FastAPI()

api_router = APIRouter()

class IssueCredential(BaseModel):
    credential: dict
    options: dict

class VerifyCredential(BaseModel):
    verifiableCredential: dict
    options: dict

class VerifyPresentation(BaseModel):
    verifiablePresentation: dict
    options: dict


@api_router.get("/health")
async def server_status():
    return JSONResponse(status_code=200, content={"status": "ok"})


@api_router.post("/credentials/issue")
async def issue_credential_route(request_body: IssueCredential):
    credential = request_body.model_dump()['credential']
    options = request_body.model_dump()['options']
    vc = issue_credential(credential, options)
    return JSONResponse(status_code=201, content={
        'verifiableCredential': vc
    })


@api_router.post("/credentials/verify")
async def verify_credential_route(request_body: VerifyCredential):
    vc = request_body.model_dump()['verifiableCredential']
    options = request_body.model_dump()['options']
    verification = issue_credential(vc, options)
    return JSONResponse(status_code=200, content=verification)


@api_router.post("/presentations/verify")
async def verify_presentation_route(request_body: VerifyPresentation):
    vp = request_body.model_dump()['verifiablePresentation']
    options = request_body.model_dump()['options']
    verification = issue_credential(vp, options)
    return JSONResponse(status_code=200, content=verification)

app.include_router(api_router)
