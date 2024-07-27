import { CircularProgress, Skeleton } from "@mui/material"


export default function SkeletonMenuItem () {
  return (
    <div className={"menu-card "}>
      <CircularProgress className="menu-image" color="primary" sx={{marginLeft:'5px'}}/>
      <div className="menu-text">
        <div className="menu-primary">
          <span className="menu-name">
          <Skeleton variant="rounded" sx={{width:'160px', height:"20px" }} />
          </span>
          <Skeleton variant="rounded" sx={{width:'100px', height: "15px" }} />
        </div>
        <div className="menu-secondary">
          <span className="menu-brewery"><Skeleton variant="rounded" sx={{width:'70px' }} /></span>
          <span>•</span>
          <span><Skeleton variant="rounded" sx={{width:'70px' }} /></span>
          <span>•</span>
          <span><Skeleton variant="rounded" sx={{ width:'70px' }} /></span>
        </div>
        <div className="menu-description">
        <Skeleton variant="rounded" sx={{ width:'275px', height:"40px" }} />
        </div>
      </div>
    </div>
  )
}